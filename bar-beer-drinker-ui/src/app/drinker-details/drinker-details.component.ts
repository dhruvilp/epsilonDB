import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkersService, Drinker } from '../drinkers.service';

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
  drinkerSpendings: any[];

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

    this.drinkerService.get_beers_order_most(this.drinkerName).subscribe(
        data => {
          console.log(data);

        const itemname = [];
        const totalqty = [];

        data.forEach(drinker => {
          itemname.push(drinker.itemname);
          totalqty.push(drinker.totalqty);
        });

        this.renderCharts(itemname, totalqty);
        }
      );

    this.drinkerService.get_drinker_spendings(this.drinkerName).subscribe(
      data=>{
        this.drinkerSpendings = data;
      }
    );


    });
  }

  ngOnInit() {
  }

  renderCharts(itemname: string[], totalqty: number[]) {
    Highcharts.chart('drinkergraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Beers S/He Orders the Most'
      },
      xAxis: {
        categories: itemname,
        title: {
            style: {
                color: 'green',
                fontSize: '20'
            },
            text: 'Beer Names'
        }
      },
      yAxis: {
        min: 0,
        title: {
            style: {
                color: 'green',
                fontSize: '20'
            },
            text: 'Total Qty'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        drinker: {
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
        data: totalqty
      }]

    });
  }

}
