import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


export interface BeerLocation {
  Bar: string;
  Price: number;
  customers: number;
}

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private http: HttpClient) { }


  getBeers() {
    return this.http.get<any[]>('/api/beer');
  }

  getTop10Bars(beer: string) {
    return this.http.get<any[]>('/api/Top10BarBeer/' + beer);
  }

  getTop10Consumers(beer: string) {
    return this.http.get<any[]>('/api/Top10Consumer/' + beer);
  }

  getTop10Dates(beer: string) {
    return this.http.get<any[]>('/api/get_top10_dates/' + beer);
  }

  get_time_beer_sold_most(beer: string) {
    return this.http.get<any[]>('/api/get_time_beer_sold_most/' + beer);
  }

  getBarsSelling(beer: String) {
    return this.http.get<BeerLocation[]>('/api/bars-selling/' + beer);
  }

  getBeerManufacturers(beer?: string): any {
    if (beer) {
      return this.http.get<string>(`/api/beer-manufacturer/` + beer);
    }
    return this.http.get<string[]>('/api/beer-manufacturer');
  }
}

