from flask import Flask
from flask import jsonify
from flask import make_response
from flask import request
import json

from BarBeerDrinker import database

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Database 336 Class Project Fall 2018 (Group# 144) (c) All Copyrights Reserved.'

@app.route('/api/busiesttimes/<barname>', methods=["GET"])
def get_busiest_times(barname):
    try:
        if barname is None:
            raise ValueError("Bar Name is not specified.")
        return jsonify(database.busiest_times(barname))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/inventory/<barname>', methods=["GET"])
def get_inventory_fraction(barname):
    try:
        if barname is None:
            raise ValueError("Bar Name is not specified.")
        return jsonify(database.inventoryFraction(barname))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/bars', methods=["GET"])
def get_bars():
    return jsonify(database.get_bars())


@app.route("/api/bars/<name>", methods=["GET"])
def find_bar(name):
    try:
        if name is None:
            raise ValueError("Bar is not specified.")
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(bar)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/beers_cheaper_than", methods=["POST"])
def find_beers_cheaper_than():
    body = json.loads(request.data)
    max_price = body['maxPrice']
    return jsonify(database.filter_beers(max_price))

@app.route('/api/menu/<name>', methods=['GET'])
def get_menu(name):
    try:
        if name is None:
            raise ValueError('Bar is not specified.')
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(database.get_bar_menu(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/bar-cities", methods=["GET"])
def get_bar_cities():
    try:
        return jsonify(database.get_bar_cities())
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/beer", methods=["GET"])
def get_beers():
    try:
        return jsonify(database.get_beers())
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/beer-manufacturer", methods=["GET"])
def get_beer_manufacturers():
    try:
        return jsonify(database.get_beer_manufacturers(None))
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/manufacturers", methods=["GET"])
def get_manufacturers():
    try:
        return jsonify(database.get_manufacturers())
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/beer-manufacturer/<beer>", methods=["GET"])
def get_manufacturers_making(beer):
    try:
        return jsonify(database.get_beer_manufacturers(beer))
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/likes", methods=["GET"])
def get_likes():
    try:
        drinker = request.args.get("drinker")
        if drinker is None:
            raise ValueError("Drinker is not specified.")
        return jsonify(database.get_likes(drinker))
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/drinker", methods=["GET"])
def get_drinkers():
    try:
        return jsonify(database.get_drinkers())
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/drinker/<name>", methods=["GET"])
def get_drinker_info(name):
    try:
        if name is None:
            raise ValueError("Drinker is not specified.")
        return jsonify(database.get_drinker_info(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/bars-selling/<beer>', methods=['GET'])
def find_bars_selling(beer):
    try:
        if beer is None:
            raise ValueError('Beer not specified')
        return jsonify(database.get_bars_selling(beer))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/frequents-data', methods=['GET'])
def get_bar_frequent_counts():
    try:
        return jsonify(database.get_bar_frequent_counts())
    except Exception as e:
        return make_response(str(e), 500)



@app.route("/api/bartender", methods=["GET"])
def get_bartenders():
    try:
        return jsonify(database.get_bartenders())
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/Top10BarBeer/<beer>", methods=["GET"])
def get_top_beers_sold(beer):
    try:
        if beer is None:
            raise ValueError("Beer is not specified.")
        return jsonify(database.get_top_beers_sold(beer))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/Top10Consumer/<beer>", methods=["GET"])
def get_top_consumers(beer):
    try:
        if beer is None:
            raise ValueError("Beer is not specified.")
        return jsonify(database.get_top_consumers(beer))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/get_top10_dates/<beer>", methods=["GET"])
def get_top10_dates(beer):
    try:
        if beer is None:
            raise ValueError("Beer is not specified.")
        return jsonify(database.get_top10_dates(beer))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/get_top10_transactions/<drinker_name>", methods=["GET"])
def get_top10_transactions(drinker_name):
    try:
        if drinker_name is None:
            raise ValueError("Drinker is not specified.")
        return jsonify(database.get_top10_transactions(drinker_name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/get_top10_beersordered/<drinker_name>", methods=["GET"])
def get_top10_beersordered(drinker_name):
    try:
        if drinker_name is None:
            raise ValueError("Drinker is not specified.")
        return jsonify(database.get_top10_beersordered(drinker_name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)  

@app.route("/api/get_top10_barsspending/<drinker_name>", methods=["GET"])
def get_top10_barsspending(drinker_name):
    try:
        if drinker_name is None:
            raise ValueError("Drinker is not specified.")
        return jsonify(database.get_top10_barsspending(drinker_name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 

@app.route("/api/get_top_daysspending/<drinker_name>", methods=["GET"])
def get_top_daysspending(drinker_name):
    try:
        if drinker_name is None:
            raise ValueError("Drinker is not specified.")
        return jsonify(database.get_top_daysspending(drinker_name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)                

@app.route("/api/get_top_regions/<manufacturer_name>", methods=["GET"])
def get_top_regions(manufacturer_name):
    try:
        if manufacturer_name is None:
            raise ValueError("Manufacturer is not specified.")
        return jsonify(database.get_top_regions(manufacturer_name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/get_drinker_regions/<manufacturer_name>", methods=["GET"])
def get_drinker_region(manufacturer_name):
    try:
        if manufacturer_name is None:
            raise ValueError("Manufacturer is not specified.")
        return jsonify(database.get_drinker_region(manufacturer_name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/get_top_drinkers/<bar_name>", methods=["GET"])
def get_top_drinkers(bar_name):
    try:
        if bar_name is None:
            raise ValueError("Bar is not specified.")
        return jsonify(database.get_top_drinkers(bar_name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/get_top_beers/<bar_name>", methods=["GET"])
def get_top_beers(bar_name):
    try:
        if bar_name is None:
            raise ValueError("Bar is not specified.")
        return jsonify(database.get_top_beers(bar_name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/get_busy_bardays/<bar_name>", methods=["GET"])
def get_busy_bardays(bar_name):
    try:
        if bar_name is None:
            raise ValueError("Bar is not specified.")
        return jsonify(database.get_busy_bardays(bar_name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)            



@app.route("/api/get_bartender_shifts/<bartender_name>", methods=["GET"])
def get_bartender_shifts(bartender_name):
    try:
        if bartender_name is None:
            raise ValueError("Bartender is not specified.")
        return jsonify(database.get_bartender_shifts(bartender_name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)        

@app.route("/api/get_bartender_beerssold/<bartender_name>", methods=["GET"])
def get_bartender_beerssold(bartender_name):
    try:
        if bartender_name is None:
            raise ValueError("Bartender is not specified.")
        return jsonify(database.get_bartender_beerssold(bartender_name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/get_column_name/<table_name>", methods=["GET"])
def get_column_name(table_name):
    try:
        if table_name is None:
            raise ValueError("Table is not specified.")
        return jsonify(database.get_column_name(table_name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 
       


