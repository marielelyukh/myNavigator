import { Component, OnInit } from '@angular/core';
import { NavController} from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { HttpClient, HttpParams} from '@angular/common/http';
import { HomePage } from '../home/home';

import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';


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
export class RequestDriverPage implements OnInit{
  myParam: string;
  public user: sendDriverCredentials = {
    phone: '',
    name: '',
    address_from: '',
    address_to: '',
    driver: '',
  };
  public errorText: boolean;
  public lng: number;
  public lat: number;


  constructor(private navCtrl: NavController, private http: HttpClient, private geolocation: Geolocation, params: NavParams, private nativeGeocoder: NativeGeocoder) {
    this.myParam = params.get('myParam');
    this.user.driver = this.myParam;
  }
  ngOnInit() {
    this.getLocation();
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
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      console.log(this.lat, this.lng);
      this.nativeGeocoder.reverseGeocode(this.lat, this.lng).then((resp) => {
        this.user.address_from = (resp[0].locality + " " + resp[0].subLocality + " " + resp[0].thoroughfare + " " + resp[0].subThoroughfare)
        console.log(this.user.address_from)
      });
      // .then((result: NativeGeocoderReverseResult[]) => console.log(JSON.stringify(result[0])))
      // .catch((error: any) => console.log(error));

      this.nativeGeocoder.forwardGeocode('Berlin')
        .then((coordinates: NativeGeocoderForwardResult[]) => console.log('The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude))
        .catch((error: any) => console.log(error));
      //Call to your logic HERE
    }).catch((error) => {
      // alert(error);
      console.log('Error getting location', error);
    });
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
    });

  }


}
