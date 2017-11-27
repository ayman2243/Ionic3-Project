import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Forecast } from '../../models/forecast';
import { ForecastProvider } from '../../providers/forecast/forecast';
/**
 * Generated class for the ForecastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forecast',
  templateUrl: 'forecast.html',
})
export class ForecastPage {

  data : Forecast[]

  constructor(public navCtrl: NavController, public navParams: NavParams, forecastProvider: ForecastProvider) {
  	forecastProvider.load().subscribe(data => {
  	  this.data = data;
      console.log(data);
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForecastPage');
  }

}
