import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Messages } from './piechart/piechart.component';

@Injectable()
export class Service {

  constructor(private http: HttpClient) { }
  

  getService(): Observable<Array<Messages>> {
    let json = this.http.get<Array<Messages>>('http://85.222.46.201:11780/dashboard/webapi/resource/message')
return json;
  }

}
