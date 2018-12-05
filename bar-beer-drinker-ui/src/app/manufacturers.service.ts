import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManufacturersService {

  constructor(private http: HttpClient) {}

  get_manufacturers() {
    return this.http.get<any[]>('/api/manufacturers');
  }

  get_Top_Regions(manf: string) {
    return this.http.get<any[]>('api/get_top_regions/' + manf);
  }

  get_drinker_Regions(manf: string) {
    return this.http.get<any[]>('api/get_drinker_regions/' + manf);
  }



}
