import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { HttpClient, HttpParams} from '@angular/common/http';
import { HomePage } from '../home/home';

import { Geolocation } from '@ionic-native/geolocation';


export declare interface sendDriverCredentials {
  phone: string,
  name: string,
  address_from: string,
  address_to: string,
  driver: string
}

@Component({
  selector: 'page-requestDriver',
  templateUrl: 'request_driver.html'
})
export class RequestDriverPage {
  myParam: string;
  public user: sendDriverCredentials = {
    phone: '',
    name: '',
    address_from: '',
    address_to: '',
    driver: '',
  };
  public errorText: boolean;

  constructor(private navCtrl: NavController, private http: HttpClient, private geolocation: Geolocation, params: NavParams) {
    this.myParam = params.get('myParam');
    this.user.driver = this.myParam;
  }

  sendToEmail(){
    if (!this.user.phone || !this.user.name) {
      this.errorText = true;
      return false;
    }
    let params = new HttpParams();
    params = params.append('phone', this.user.phone);
    params = params.append('name', this.user.name);
    params = params.append('address_from', this.user.address_from);
    params = params.append('address_to', this.user.address_to);
    params = params.append('driver', this.user.driver);


    console.log(this.user);
    this.http.get("http://mailer.smartcapper.online/index.php",{params: params})
      .subscribe(
        success =>{
        }
      );
    this.navCtrl.push(HomePage);
  }
  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp)
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {

    });
  }


}
