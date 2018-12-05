import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModificationsService {

  constructor(public http: HttpClient) {}

  get_column_name(table_name: String) {
    return this.http.get<any[]>('/api/get_column_name/' + table_name);
  }
}

