import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DriversPage } from '../drivers/drivers';
import { PricesPage } from '../prices/prices';
import { RequestPage } from '../request/request';
import { StockPage } from '../stock/stock';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController,) {

  }
  goToDrivers() {
    this.navCtrl.push(DriversPage);
  }

  goToPrices() {
    this.navCtrl.push(PricesPage);
  }

  goToRequest() {
    this.navCtrl.push(RequestPage);
  }

  goToStock(){
    this.navCtrl.push(StockPage);
  }

}
