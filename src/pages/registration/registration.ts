import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@IonicPage({
  name: "Registration"
})
@Component({
  selector: 'registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage implements OnInit {

  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      customername: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobileno: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    });
  }

  Title: string = "Registration";
  constructor(public navCtrl: NavController) {

  }

  onSendOTP() {
    this.navCtrl.push("OTPVerfication")
  }
}
