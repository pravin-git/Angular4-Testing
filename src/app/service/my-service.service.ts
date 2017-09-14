import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class MyService {

  constructor(private http: Http) { }

  getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
      .map(data => data.json());
  }

  

}
