import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';



@IonicPage({
  name: "OTPVerfication"
})
@Component({
  selector: 'OTPVerfication',
  templateUrl: 'OTPVerfication.html'
})
export class OTPVerficationPage {

  Title: string = "OTP Verfication"

  constructor(public navCtrl: NavController) {

  }

  onSubmit() {
    this.navCtrl.push("Products")
  }

}


