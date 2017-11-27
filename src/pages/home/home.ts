import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomeModule } from '../../models/home';
import { HomeProvider } from '../../providers/home/home';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data : HomeModule[]

  constructor(public navCtrl: NavController, homeProvider: HomeProvider) {
  	homeProvider.load().subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }
   
}
