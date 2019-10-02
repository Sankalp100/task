import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { list } from './list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }
  url = 'https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI';

  getData() {
    return this.http.get(this.url);
  }

  getDatabyid(name: string) {
    return this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=' + name);
  }
}
