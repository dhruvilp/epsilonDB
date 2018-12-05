import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

export interface Bar {
  barname: String;
  barID: String;
  address: String;
  city: String;
  state: String;
  zipcode: String;
}

export interface BarMenuItem {
  itemname: String;
  type: String;
  maker: String;
  price: number;
  likes: number;
}


@Injectable({
  providedIn: 'root'
})
export class BarsService {

  constructor(public http: HttpClient ) {

  }
  getBars() {
    return this.http.get<Bar[]>('/api/bars');

  }
  getBar(bar: String) {
    return this.http.get<Bar[]>('/api/bars/' + bar);
  }
  getMenu(bar: String) {
    return this.http.get<BarMenuItem[]>('/api/menu/' + bar);
  }
  getFrequentCounts() {
    return this.http.get<any[]>('/api/frequents-data' );
  }

  get_top_drinkers(barname: String) {
    return this.http.get<any[]>('/api/get_top_drinkers/' + barname );
  }

  get_top_beers(barname: String) {
    return this.http.get<any[]>('/api/get_top_beers/' + barname );
  }

  getBusyBarDays(barname: String) {
    return this.http.get<any[]>('/api/get_busy_bardays/' + barname );
  }

  getBusiestTimes(barname: String) {
    return this.http.get<any[]>('/api/busiesttimes/' + barname );
  }

  getInventoryFraction(barname: String) {
    return this.http.get<any[]>('/api/inventory/' + barname );
  }
}
