import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Forecast } from '../../models/forecast';
/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ForecastProvider {

  url = 'http://api.openweathermap.org/data/2.5/forecast?q=Cairo,EG&appid=a3ff5b497db7f46cc103a6ca89f4b4c0';

  constructor(public http: Http) {
    console.log('Hello ForecastProvider Provider');
  }

  load(): Observable<Forecast[]> {
    return this.http.get(`${this.url}`)
      .map(res => <Forecast[]>res.json());
  }

}
