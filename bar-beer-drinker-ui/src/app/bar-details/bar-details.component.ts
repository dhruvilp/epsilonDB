import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BarsService, Bar, BarMenuItem} from '../bars.service';
import { HttpResponse } from '@angular/common/http';

declare const Highcharts: any;

@Component({
  selector: 'app-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.css']
})
export class BarDetailsComponent implements OnInit {
  barName: string;
  barDetails: Bar[];
  menu: BarMenuItem[];
  drinkers: any[];
  beers: any[];

  constructor(
    private barservice: BarsService,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe((paramMap) => {
      this.barName = paramMap.get('bar');

      barservice.getBar(this.barName).subscribe(
        data => {
          this.barDetails = data;
        },
        (error: HttpResponse<any>) => {
          if (error.status === 404) {
            alert('Bar Not Found');
          } else {
            console.error(error.status + '-' + error.body);
            alert('An error occured on the Server. Please check browser console!');
          }
        }
      );
      barservice.getMenu(this.barName).subscribe(
        data => {
          this.menu = data;
        },

      );

      this.barservice.get_top_drinkers(this.barName).subscribe(
        data => {
          this.drinkers = data;
        }
      );

      this.barservice.get_top_beers(this.barName).subscribe(
        data => {
          this.beers = data;
        }
      );

      this.barservice.getBusyBarDays(this.barName).subscribe(
        data => {
          console.log(data);

          const day = [];
        const busyday = [];

        data.forEach(bar => {
          day.push(bar.transday);
          busyday.push(bar.busyday);
        });

        this.renderCharts(day, busyday);
        }
      );

      this.barservice.getBusiestTimes(this.barName).subscribe(
        data => {
          console.log(data);

          const qty = [];
          const time = [];

        data.forEach(bar => {
          qty.push(bar.qty);
          time.push(bar.time);
        });

        this.renderCharts2(time, qty);
        }
      );

      this.barservice.getInventoryFraction(this.barName).subscribe(
        data => {
          console.log(data);

          const day = [];
          const fraction = [];

        data.forEach(bar => {
          day.push(bar.day);
          fraction.push(bar.fraction);
        });

        this.renderCharts3(day, fraction);
        }
      );

    });
  }

  ngOnInit() {
  }

  renderCharts(day: string[], busyday: number[]) {
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Transactions on different days'
      },
      xAxis: {
        categories: day,
        title: {
            style: {
                color: 'green',
                fontSize: '20'
            },
            text: 'Days'
        }
      },
      yAxis: {
        min: 0,
        title: {
            style: {
                color: 'green',
                fontSize: '20'
            },
            text: '# of Transactions'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          datalabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: busyday
      }]

    });
  }

   renderCharts2(time: string[], qty: number[]) {
    Highcharts.chart('bargraph2', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Busiest Times'
      },
      xAxis: {
        categories: time,
        title: {
            style: {
                color: 'green',
                fontSize: '20'
            },
            text: 'Time Range'
        }
      },
      yAxis: {
        min: 0,
        title: {
            style: {
                color: 'green',
                fontSize: '20'
            },
            text: '# of Transactions'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          datalabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: qty
      }]

    });
  }

  renderCharts3(day: string[], fraction: number[]) {
    Highcharts.chart('bargraph3', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Inventory Fraction'
      },
      xAxis: {
        categories: day,
        title: {
            style: {
                color: 'green',
                fontSize: '20'
            },
            text: 'Days'
        }
      },
      yAxis: {
        min: 0,
        title: {
            style: {
                color: 'green',
                fontSize: '20'
            },
            text: 'Fraction'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          datalabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: fraction
      }]

    });
  }
}
