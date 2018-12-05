import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BartendersService {

  constructor(private http: HttpClient) { }

  get_bartenders(){
    return this.http.get<any[]>('/api/bartender');
  }

  get_bartender_shift(bartender_name: String){
    return this.http.get<any[]>(`/api/get_bartender_shifts/` + bartender_name);
  }

  get_bartender_beerssold(bartender_name: String){
    return this.http.get<any[]>(`/api/get_bartender_beerssold/` + bartender_name);
  }

}
