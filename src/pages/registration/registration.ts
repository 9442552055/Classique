import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';

@IonicPage({
  name: "Registration"
})
@Component({
  selector: 'registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  Title:string="Registration";
  constructor(public navCtrl: NavController) {

  }

  onSendOTP(){
    this.navCtrl.push("OTPVerfication")
  }
}
