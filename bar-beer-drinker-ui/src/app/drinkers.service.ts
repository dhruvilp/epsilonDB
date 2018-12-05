import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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


  getDrinkerBeersOrdered(drinker: string) {
    return this.http.get<any[]>('/api/get_top10_beersordered/' + drinker);
  }

  getDrinkerBarSpending(drinker: string) {
    return this.http.get<any[]>('/api/get_top10_barsspending/' + drinker);
  }

  getDrinkerDaysSpending(drinker: string) {
    return this.http.get<any[]>('/api/get_top_daysspending/' + drinker);
  }


}
