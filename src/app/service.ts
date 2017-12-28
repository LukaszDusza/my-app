import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Messages } from './piechart/piechart.component';
import { FiltersComponent } from './filters/filters.component';

@Injectable()
export class Service {

  constructor(private http: HttpClient) { }


  //   getService(): Observable<Array<Messages>> {
  //     let selector = new FiltersComponent();

  //     let json = this.http.get<Array<Messages>>('http://85.222.46.201:11780/dashboard/webapi/resource/message')
  // return json;
  //   }

  getService(link): Observable<Array<Messages>> {
    let selector = new FiltersComponent();
    //let link = selector.getSelections();
    let json = this.http.get<Array<Messages>>(link);
    return json;
    
  }

}
