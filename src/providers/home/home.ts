import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { HomeModule } from '../../models/home';
/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {

  url = 'http://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=a3ff5b497db7f46cc103a6ca89f4b4c0';

  constructor(public http: Http) {
    console.log('Hello HomeProvider Provider');
  }

  load(): Observable<HomeModule[]> {
    return this.http.get(`${this.url}`)
      .map(res => <HomeModule[]>res.json());
  }

}
