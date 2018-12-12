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

    });
  }

  ngOnInit() {

  }

}
