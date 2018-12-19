import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DriversPage } from '../pages/drivers/drivers';
import { DriverPage } from '../pages/driver/driver';
import { PricesPage } from '../pages/prices/prices';
import { RequestPage } from '../pages/request/request';
import { RequestDriverPage } from '../pages/request_driver/request_driver';
import { StockPage } from '../pages/stock/stock';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DriversPage,
    PricesPage,
    RequestPage,
    StockPage,
    DriverPage,
    RequestDriverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DriversPage,
    PricesPage,
    RequestPage,
    StockPage,
    DriverPage,
    RequestDriverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation
  ]
})
export class AppModule {}
