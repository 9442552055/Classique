import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RegistrationModule } from '../pages/registration/registration.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule, RegistrationModule,
    IonicModule.forRoot(MyApp,
      {
        preloadModules: true,
        animate: false,
        scrollAssist: true,
        autoFocusAssist: true
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
