import { Component, OnInit } from '@angular/core';
import { BarsService } from '../bars.service';


declare const Highcharts: any;

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.css']
})
export class InsightComponent implements OnInit {

  constructor(private barService: BarsService) {
    this.barService.getFrequentCounts().subscribe(
      data => {
        console.log(data);

        const barname = [];
        const frequentCount = [];

        data.forEach(bar => {
          barname.push(bar.barname);
          frequentCount.push(bar.frequentCount);
        });
        this.renderCharts(barname, frequentCount);
      }
    );

    this.barService.getFrequentCounts().subscribe(
      data => {
        console.log(data);

        const barname = [];
        const frequentCount = [];

        data.forEach(bar => {
          barname.push(bar.barname);
          frequentCount.push(bar.frequentCount);
        });
        this.renderCharts(barname, frequentCount);
      }
    );
  }

  ngOnInit() {
  }

  renderCharts(barname: string[], frequentCount: number[]) {
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Frequenting count at bars'
      },
      xAxis: {
        categories: barname,
        title: {
          text: 'Bar'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of customers'
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
        data: frequentCount
      }]

    });
  }
}
