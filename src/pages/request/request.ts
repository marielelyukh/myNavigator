import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { HttpClient, HttpParams} from '@angular/common/http';
import { HomePage } from '../home/home';

import { Geolocation } from '@ionic-native/geolocation';



export declare interface sendCredentials {
  phone: string,
  name: string,
  address_from: string,
  address_to: string,
  time: string,
  company: string,
  model: string,
  number: string,
  category: string,
  other_info: string
}

@Component({
  selector: 'page-request',
  templateUrl: 'request.html'
})
export class RequestPage {
  public user: sendCredentials = {
    phone: '',
    name: '',
    address_from: '',
    address_to: '',
    time: '',
    company: '',
    model: '',
    number: '',
    category: '',
    other_info: ''
  };
  public errorText: boolean;

  constructor(private navCtrl: NavController, private http: HttpClient, private geolocation: Geolocation) {
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
    params = params.append('time', this.user.time);
    params = params.append('company', this.user.company);
    params = params.append('model', this.user.model);
    params = params.append('number', this.user.number);
    params = params.append('category', this.user.category);
    params = params.append('other_info', this.user.other_info);

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
      // resp.coords.latitude
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });
  }


}
