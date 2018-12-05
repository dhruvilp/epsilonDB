import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkersService } from '../drinkers.service';

declare const Highcharts: any;

@Component({
  selector: 'app-drinker-details',
  templateUrl: './drinker-details.component.html',
  styleUrls: ['./drinker-details.component.css']
})
export class DrinkerDetailsComponent implements OnInit {

  drinkerName: string;
  drinkerDetails: any[];
  drinkerTransactions: any[];
  drinkerBeersOrdered: any[];

  constructor(
    private drinkerService: DrinkersService,
    private route: ActivatedRoute
  ) 
  { 
    this.route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinker') 

    this.drinkerService.getDrinkerDetails(this.drinkerName).subscribe(
      data=>{
        this.drinkerDetails = data;
      }
    );

    this.drinkerService.getDrinkerTransaction(this.drinkerName).subscribe(
      data=>{
        this.drinkerTransactions = data;
        
      }
    );

    this.drinkerService.getDrinkerBeersOrdered(this.drinkerName).subscribe(
      data=>{
        console.log(data);

        const beer=[];
        const beersordered=[];

        data.forEach(drinker => {
          beer.push(drinker.Item);
          beersordered.push(drinker.mostbeer);
        });
        
        this.renderCharts(beer, beersordered);
      }
    );
     
    this.drinkerService.getDrinkerBarSpending(this.drinkerName).subscribe(
      data=>{
        console.log(data);

        const bar=[];
        const barspending=[];

        data.forEach(drinker => {
          bar.push(drinker.Bar);
          barspending.push(drinker.spending);
        });
        
        this.renderCharts1(bar, barspending);
      }
    );

    this.drinkerService.getDrinkerDaysSpending(this.drinkerName).subscribe(
      data=>{
        console.log(data);

        const day=[];
        const dayspending=[];

        data.forEach(drinker => {
          day.push(drinker.Day);
          dayspending.push(drinker.spending);
        });
        
        this.renderCharts2(day, dayspending);
      }
    );


    });
  }

  ngOnInit() {

  }

  renderCharts(beer: string[], beersordered: number[]) {
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Beers drinker orders the most'
      },
      xAxis: {
        categories: beer,
        title: {
          text: 'Beer'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of beers ordered'
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
        data: beersordered
      }]

    });
  }

  renderCharts1(bar: string[], barspending: number[]) {
    Highcharts.chart('bargraph1', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Amount spent in different Bars'
      },
      xAxis: {
        categories: bar,
        title: {
          text: 'Bar'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of amount spent'
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
        data: barspending
      }]

    });
  }

  renderCharts2(day: string[], dayspending: number[]) {
    Highcharts.chart('bargraph2', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Amount spent on different Days'
      },
      xAxis: {
        categories: day,
        title: {
          text: 'Day'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of amount spent'
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
        data: dayspending
      }]

    });
  }
}
