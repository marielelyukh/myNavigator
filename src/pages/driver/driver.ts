import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { RequestDriverPage } from '../request_driver/request_driver';


@Component({
  selector: 'page-driver',
  templateUrl: 'driver.html'
})
export class DriverPage {
  myParam: string;

  constructor(public navCtrl: NavController, params: NavParams) {
    this.myParam = params.get('myParam');
  }

  orderDriver(param){
    this.navCtrl.push(RequestDriverPage, {'myParam': param});
  }
}
