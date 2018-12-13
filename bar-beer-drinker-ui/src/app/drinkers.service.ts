import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Drinker {
  itemname: String;
  totalqty: String;
}

@Injectable({
  providedIn: 'root'
})
export class DrinkersService {

  constructor(public http: HttpClient) { }

  getDrinkers(){
    return this.http.get<any[]>('/api/drinker');
  }

  getDrinkerDetails(drinker: string) {
    return this.http.get<any[]>('/api/drinker/' + drinker);
  }

  getDrinkerTransaction(drinker: string) {
    return this.http.get<any[]>('/api/get_top10_transactions/' + drinker);
  }

  get_beers_order_most(drinker: string) {
    return this.http.get<any[]>('/api/get_beers_order_most/' + drinker);
  }

  get_drinker_spendings(drinker: string) {
    return this.http.get<any[]>('/api/get_drinker_spendings/' + drinker);
  }


}
