import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DriverPage } from '../driver/driver';


@Component({
  selector: 'page-drivers',
  templateUrl: 'drivers.html'
})
export class DriversPage {
  public myParam: string = 'kek';
  public drivers: any = [
    { "id": 0,
      "name": "Юрий",
      "age": "36 лет",
      "exp": "16 лет",
      "category": "В, С",
      "photo": "assets/imgs/drivers/1.png",
      "big_photo": "assets/img/drivers/1.jpg"
    },
    {
      "id": 1,
      "name": "Влад",
      "age": "38 лет",
      "exp": "18 лет",
      "category": "В, С",
      "photo": "assets/imgs/drivers/2.png",
      "big_photo": "assets/img/drivers/2.jpg"
    },
    {
      "id": 2,
      "name": "Станислав",
      "age": "33 года",
      "exp": "14 лет",
      "category": "В",
      "photo": "assets/imgs/drivers/3.png",
      "big_photo": "assets/img/drivers/3.jpg"
    },
    {
      "id": 3,
      "name": "Вадим",
      "age": "32 года",
      "exp": "12 лет",
      "category": "В",
      "photo": "assets/imgs/drivers/4.png",
      "big_photo": "assets/img/drivers/4.jpg"
    },
    {
      "id": 4,
      "name": "Родион",
      "age": "33 года",
      "exp": "13 лет",
      "category": "В",
      "photo": "assets/imgs/drivers/5.png",
      "big_photo": "assets/img/drivers/5.jpg"
    },
    {
      "id": 5,
      "name": "Илья",
      "age": "31 год",
      "exp": "11 лет",
      "category": "В, С",
      "photo": "assets/imgs/drivers/6.png",
      "big_photo": "assets/img/drivers/6.jpg"
    }
  ];


  constructor(public navCtrl: NavController) {

  }

  goToDriver(driver) {
    this.navCtrl.push(DriverPage, {'myParam': driver});
    // this.navCtrl.push(DriverPage);
  }

}
