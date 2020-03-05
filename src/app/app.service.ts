import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebServiceCall {
  constructor(private http: HttpClient){ 
    

  }
  get_users(){
    return this.http.get
    ('https://jsonplaceholder.typicode.com/albums');
  }
}