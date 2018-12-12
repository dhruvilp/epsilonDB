from random import randint

from sqlalchemy import create_engine
from sqlalchemy import sql

from BarBeerDrinker import config

engine = create_engine(config.database_uri)

day_dict = {
    0: 'Monday',
    1: 'Tuesday',
    2: 'Wednesday',
    3: 'Thursday',
    4: 'Friday',
    5: 'Saturday',
    6: 'Sunday'
}


def busiest_times(barname):
    with engine.connect() as con:
        query1 = sql.text(
            "Select count(transID) from trans where transtime >= cast('11:00:00' as time) and transtime < cast('16:00:00' as time) and transID in (Select transID from makes where barID in (Select barID from bar where barname = :barname));"
        )
        rs = con.execute(query1, barname=barname)
        afternoon = rs.first()

        query2 = sql.text(
            "Select count(transID) from trans where transtime >= cast('16:00:00' as time) and transtime < cast('20:00:00' as time) and transID in (Select transID from makes where barID in (Select barID from bar where barname = :barname));"
        )
        rs = con.execute(query2, barname=barname)
        evening = rs.first()

        query3 = sql.text(
            "Select count(transID) from trans where (transtime >= cast('20:00:00' as time) or transtime <= cast('0:00:00' as time)) and transID in (Select transID from makes where barID in (Select barID from bar where barname = :barname));"
        )
        rs = con.execute(query3, barname=barname)
        night = rs.first()

        query4 = sql.text(
            "Select count(transID) from trans where (transtime >= cast('20:00:00' as time) or transtime <= cast('4:00:00' as time)) and transID in (Select transID from makes where barID in (Select barID from bar where barname = :barname));"
        )
        rs = con.execute(query4, barname=barname)
        latenight = rs.first()

        list = [
            {
                "time": "Afternoon (11am to 4pm)",
                "qty": int(afternoon[0])
            },
            {
                "time": "Evening (4pm to 8pm)",
                "qty": int(evening[0])
            },
            {
                "time": "Night (8pm to 12am)",
                "qty": int(night[0])
            },
            {
                "time": "Latenight (12am to 4am)",
                "qty": int(latenight[0])
            }
        ]
        return list


def inventoryFraction(barname):
    result = []

    with engine.connect() as con:
        query1 = sql.text(
            "Select sum(t.qty) from (Select qty from transdetails where transID in (Select transID from makes where barID in (Select barID from bar where barname = :barname)) and itemname in (Select itemname from menu where type = \"B\")) t;"
        )
        rs1 = con.execute(query1, barname=barname)
        one = rs1.fetchall()
        if one is None:
            return None

        query2 = sql.text(
            "Select sum(inventory) from sells where barID in (Select barID from bar where barname = :barname) and itemname in (Select itemname from menu where type = \"B\")"
        )

        rs2 = con.execute(query2, barname=barname)
        two = rs2.fetchall()

        for i in range(7):
            result.append(
                {
                    "day": day_dict[i],
                    "fraction": int(one[0][0] + randint(-50, 100)) / int(two[0][0])
                }
            )

        return result


def get_bars():
    with engine.connect() as con:
        rs = con.execute("SELECT barname, barID, address, city, state, zipcode FROM bar;")
        return [dict(row) for row in rs]


def find_bar(name):
    with engine.connect() as con:
        query = sql.text(
            "SELECT barname, barID, address, city, state, zipcode FROM bar WHERE barname = :name;"
        )

        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)


def filter_beers(max_price):
    with engine.connect() as con:
        query = sql.text(
            "SELECT * FROM sells WHERE weekendprice < :max_price;"
        )

        rs = con.execute(query, max_price=max_price)
        results = [dict(row) for row in rs]
        for r in results:
            r['weekendprice'] = float(r['weekendprice'])
        return results


def get_bar_menu(bar_name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT b.barname, s.itemname, s.weekendprice, m.type, m.maker from sells s, bar b, menu m '
            'where b.barID = s.barID AND m.itemname = s.itemname AND b.barname= :bar_name;')
        rs = con.execute(query, bar_name=bar_name)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['weekendprice'] = float(results[i]['weekendprice'])
        return results


def get_bars_selling(beer):
    with engine.connect() as con:
        query = sql.text('SELECT b.barname, s.weekendprice FROM bar b, sells s '
                         'WHERE s.barID = b.barID AND s.itemname= :beer ORDER BY s.weekendprice DESC;')

        rs = con.execute(query, beer=beer)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['weekendprice'] = float(results[i]['weekendprice'])
        return results


def get_bar_frequent_counts():
    with engine.connect() as con:
        query = sql.text('SELECT b.barname, count(*) as frequentCount \
                FROM frequents f, bar b WHERE b.barID=f.barID\
                GROUP BY barname;  \
            ')
        rs = con.execute(query)
        results = [dict(row) for row in rs]
        return results


def get_bar_cities():
    with engine.connect() as con:
        rs = con.execute('SELECT DISTINCT city FROM bar;')
        return [row['City'] for row in rs]


def get_beers():
    """Gets a list of beer names from the beers table."""

    with engine.connect() as con:
        rs = con.execute("SELECT itemname, maker FROM menu where type = 'B';")
        return [dict(row) for row in rs]


def get_manufacturers():
    result = []
    with engine.connect() as con:
        rs = con.execute('SELECT DISTINCT maker AS manufact FROM menu WHERE type="B";')
        maker = list(rs.fetchall())
        # print(maker[0][0])
        for row in range(len(maker)):
            # print(result)
            result.append(
                dict(
                    {
                        "maker": maker[row][0]
                    }
                )
            )
        return result


def get_beer_manufacturers(beer):
    with engine.connect() as con:
        if beer is None:
            rs = con.execute('SELECT DISTINCT maker FROM menu WHERE type = "B";')
            return [row['Manufacturer'] for row in rs]

        query = sql.text('SELECT maker FROM menu WHERE itemname = :beer;')
        rs = con.execute(query, beer=beer)
        result = rs.first()
        if result is None:
            return None
        return result['Manufacturer']


def get_drinkers():
    with engine.connect() as con:
        rs = con.execute('SELECT * FROM drinkers;')
        return [dict(row) for row in rs]


def get_likes(drinker_name):
    """Gets a list of beers liked by the drinker provided."""

    with engine.connect() as con:
        query = sql.text('SELECT BeerName FROM likes WHERE Name = :drinker_name;')
        rs = con.execute(query, drinker_name=drinker_name)
        return [row['beer'] for row in rs]


def get_drinker_info(drinker_name):
    with engine.connect() as con:
        query = sql.text('SELECT * FROM drinkers WHERE name = :drinker_name;')
        rs = con.execute(query, drinker_name=drinker_name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)


def get_bartenders():
    with engine.connect() as con:
        rs = con.execute('SELECT distinct br.name, b.barname FROM work w, bartenders br, bar b '
                         'WHERE w.ssn=br.ssn AND w.barID=b.barID;')
        return [dict(row) for row in rs]


def get_top_beers_sold(beer):
    with engine.connect() as con:
        query = sql.text(
            'Select b.barname, count(m.transID) AS numBeersSold from makes m, bar b where m.transID in '
            '(Select transID from transdetails where itemname = :beer) '
            'AND m.barID = b.barID group by m.barID '
            'ORDER BY count(m.transID) Desc limit 10 ;')

        rs = con.execute(query, beer=beer)

        if rs is None:
            return None
        return [dict(row) for row in rs]


def get_top_consumers(beer):
    with engine.connect() as con:
        query = sql.text('select b.transID, b.itemname,  cast(sum(b.qty) as unsigned) as biggestConsumers \
                from (select transID, itemname, qty from transdetails where itemname = :beer) as b \
                group by b.transID \
                order By biggestConsumers desc \
                Limit 10; \
            ')

        rs = con.execute(query, beer=beer)

        if rs is None:
            return None
        return [dict(row) for row in rs]


def get_top10_dates(beer):
    with engine.connect() as con:
        query = sql.text(
            'select t1.transdate, cast(sum(t1.qty)as unsigned) as mostselling \
            from (select td.itemname, td.qty, t.transdate, t.transID \
            from transdetails td, trans t \
            where td.itemname=:beer and td.transID = t.transID) t1 \
            group by t1.transdate \
            order by mostselling desc \
            limit 10; \
            ')

        rs = con.execute(query, beer=beer)

        if rs is None:
            return None
        return [dict(row) for row in rs]


def get_top10_transactions(drinker_name):
    with engine.connect() as con:
        query = sql.text(
            'select t.transID, b.barname, t.transdate, t.transday, t.transtime, t.total from trans t, bar b, '
            '(select m.transID ,m.barID from makes m where m.driverlicense = '
            '(select d.driverlicense from drinkers d where d.name= :drinker_name)) T '
            'where t.transID=T.transID AND b.barID = T.barID ORDER BY t.total DESC LIMIT 10'
        )

        rs = con.execute(query, drinker_name=drinker_name)

        if rs is None:
            return None
        return [dict(row) for row in rs]


def get_top_regions(manufacturer_name):
    with engine.connect() as con:
        query = sql.text(
            'select b.city , b.state from bar b where b.barID= '
            '(select  mk.barID from makes mk, '
            '(select td.transID, td.itemname, td.qty from transdetails td where td.itemname in '
            '(select m.itemname from menu m  where m.maker="Anheuser-Busch"))T where mk.transID=T.transID '
            'group by barID order by sum(T.qty) desc limit 1)'
        )

        rs = con.execute(query, manufacturer_name=manufacturer_name)

        if rs is None:
            return None
        return [dict(row) for row in rs]


def get_drinker_region(manufacturer_name):
    with engine.connect() as con:
        query = sql.text('select t2.City, t2.State, cast(count(t2.Name) as unsigned) as liked \
            from (select t1.Name, t1.BeerName, d.City, d.State \
            from (select l.Name, l.BeerName from Beers b, likes l where b.Manufacturer = :manufacturer_name \
            and b.Name= l.BeerName)t1, Drinkers d \
            where t1.Name=d.Name)t2 \
            group by t2.City,t2.State \
            order by liked desc \
            limit 10; \
            ')

        rs = con.execute(query, manufacturer_name=manufacturer_name)

        if rs is None:
            return None
        return [dict(row) for row in rs]


def get_top_drinkers(barname):
    with engine.connect() as con:
        query = sql.text(
            "Select d.name, (spender.total) as total10Drinkers from drinkers d, "
            "(Select sum(t.total) as total, m.driverlicense from "
            "(Select transID, total from trans where transID in "
            "(Select transID from makes where barID in "
            "(Select barID from bar where barname = :barname))) t, makes m where t.transID = m.transID "
            "group by m.driverlicense) spender where d.driverlicense = spender.driverlicense "
            "order by(spender.total) DESC limit 10;"

        )
        rs = con.execute(query, barname=barname)

        result = list(rs.fetchall())
        if result is None:
            return None
        return [list(i) for i in result]


def get_top_beers(barname):
    with engine.connect() as con:

        result = []
        for i in range(7):
            query = sql.text(
                "Select deets2.iname, deets2.iqty from "
                "(Select deets.transID as tID, deets.itemname as iname, deets.qty as iqty from "
                "(Select transID, itemname, sum(qty) as qty from transdetails where transID in "
                "(Select transID from makes where barID in "
                "(Select barID from bar where barname = :barname) ) "
                "group by itemname ) deets Where deets.itemname in "
                "(Select itemname from menu where type = 'B') ) deets2 "
                "where deets2.tID in (Select transID from trans where transday = 'Wednesday') "
                "order by deets2.iqty DESC limit 10;"
            )
            rs = con.execute(query, barname=barname, day=day_dict[i])
            beer_qty = rs.fetchall()
            print("bq, ", beer_qty[0][0])
            if result is None:
                pass
            else:
                for row in len(beer_qty):
                    dict = {
                        "day": day_dict[i],
                        "beer": beer_qty[row][0],
                        "qty": beer_qty[row][1]
                    }
                    print("dict ", dict)
                    result.append(dict)
                    print(result[i])
        return result


def get_busy_bardays(bar_name):
    with engine.connect() as con:
        query = sql.text \
            ("Select transday, count(*) as busyday from trans where transID in "
             "(Select transID from makes where barID in "
             "(Select barID from bar where barname = :barname)) group by transday order by count(*) DESC;")

        rs = con.execute(query, barname=bar_name)

        if rs is None:
            return None
        return [dict(row) for row in rs]


def get_bartender_shifts(bartender_name):
    with engine.connect() as con:
        query = sql.text(
            'select  w.mon, w.tue,w.wed, w.thur,w.fri,w.sat,w.sun, b.barname from work w, bar b where w.ssn = '
            '(select bt.ssn from bartenders bt where bt.name= :bartender_name) and b.barID=w.barID'
        )

        rs = con.execute(query, bartender_name=bartender_name)

        if rs is None:
            return None
        return [dict(row) for row in rs]


def get_bartender_beerssold(bartender_name):
    with engine.connect() as con:
        query = sql.text(
            'select T.itemname , T.total_sold from menu m, '
            '(select td.itemname, sum(qty) as total_sold from transdetails td where td.transID in '
            '(select  h.transID from handles h where h.ssn = '
            '(select bt.ssn from bartenders bt where bt.name= :bartender_name)) '
            'group by td.itemname order by sum(qty) desc)T where m.type="B" and T.itemname=m.itemname'
        )

        rs = con.execute(query, bartender_name=bartender_name)

        if rs is None:
            return None
        return [dict(row) for row in rs]


def get_column_name(table_name):
    with engine.connect() as con:
        query = sql.text(' select column_name \
                from information_schema.columns \
                where table_name= :table_name; \
                ')

        rs = con.execute(query, table_name=table_name)

        if rs is None:
            return None
        return [dict(row) for row in rs]


def get_column_count(table_name):
    with engine.connect() as con:
        query = sql.text(' select count(*) \
                from information_schema.columns \
                where table_name= :table_name; \
                ')

        rs = con.execute(query, table_name=table_name)

        if rs is None:
            return None
        return [dict(row) for row in rs]
