import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { HttpClient, HttpParams} from '@angular/common/http';
import { HomePage } from '../home/home';



export declare interface sendCredentials {
  phone: string,
  name: string
}

@Component({
  selector: 'page-request',
  templateUrl: 'request.html'
})
export class RequestPage {
  public user: sendCredentials = {
    phone: '',
    name: ''
  };
  public errorText: boolean;

  constructor(private navCtrl: NavController, private http: HttpClient) {
  }

  sendToEmail(){
    if (!this.user.phone || !this.user.name) {
      this.errorText = true;
      return false;
    }
    let params = new HttpParams();
    params = params.append('phone', this.user.phone);
    params = params.append('name', this.user.name);
    console.log(this.user);
    this.http.get("http://mailer.smartcapper.online/index.php",{params: params})
      .subscribe(
        success =>{
        }
    );
    this.navCtrl.push(HomePage);
  }


}
