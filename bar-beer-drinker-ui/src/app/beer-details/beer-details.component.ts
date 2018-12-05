import { Component, OnInit } from '@angular/core';
import { BeersService, BeerLocation } from '../beers.service';
import { ActivatedRoute } from '@angular/router';
import {SelectItem} from 'primeng/components/common/selectitem'

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

  bars: any[];
  consumers: any[];
  dates: any[];

  beerName: string;
  beerLocations: BeerLocation[];
  manufacturer: string;

  filterOptions: SelectItem[];
  sortField: string;
  sortOrder: number;

  constructor(
    private beerService: BeersService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.beerName = paramMap.get('beer');
      console.log(this.beerName);


      this.beerService.getBarsSelling(this.beerName).subscribe(
        data => {
          this.beerLocations = data;
        }
      );

      this.beerService.getTop10Bars(this.beerName).subscribe(
        data => {
          this.bars = data;

        }
      );

      this.beerService.getTop10Consumers(this.beerName).subscribe(
        data => {
          this.consumers = data;
          console.log(this.consumers);

        }
      );

      this.beerService.getTop10Dates(this.beerName).subscribe(
        data => {
          this.dates = data;
          console.log(this.dates);

        }
      );

      this.beerService.getBeerManufacturers(this.beerName).subscribe(
        data => {
          this.manufacturer = data;
        }
      );

      this.filterOptions = [
        {
          'label': 'Low Price first',
          'value': 'low price'
        },
        {
          'label': 'High price first',
          'value': 'high price'
        },
        {
          'label': 'Most frequented first',
          'value': 'most frequented first'
        },
        {
          'label': 'Least frequented first',
          'value': 'least frequented first'
        }
      ];


    });
  }

  ngOnInit() {
  }

  sortBy(selectedOption: string) {
    if (selectedOption === 'low price') {
      this.beerLocations.sort((a, b) => {
        return a.Price - b.Price;
      });
    } else if (selectedOption === 'high price') {
      this.beerLocations.sort((a, b) => {
        return b.Price - a.Price;
      });
    } else if (selectedOption === 'least frequented first') {
      this.beerLocations.sort((a, b) => {
        return a.customers - b.customers;
      });
    } else if (selectedOption === 'most frequented first') {
      this.beerLocations.sort((a, b) => {
        return b.customers - a.customers;
      });
    }
  }

}
