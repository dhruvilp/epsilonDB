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


}
