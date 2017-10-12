import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@IonicPage({
  name: "Registration"
})
@Component({
  selector: 'registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage implements OnInit {

  Title: string = "Registration";
  constructor(public navCtrl: NavController) {

  }
  signupForm: FormGroup;
  Errors: any = {
    customername: '',
    email: '',
    mobileno: ''
  }
  validators: any = {
    customername(value: string): string {
      return value ? "" : "Please enter customer name!";
    },
    email(value: string): string {
      return value ? "" : "Please enter email!";
    },
    mobileno(value: string): string {
      return value ? "" : "Please enter mobileno!";
    }
  }
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      customername: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobileno: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    });
  }

  validate = (elem: any) => {
    this.Errors[elem.ngControl.name] = this.validators[elem.ngControl.name](elem.ngControl.value);
    // if (this.Errors[elem.ngControl.name]) {
    //   debugger;
    // }
  }


  onSendOTP() {
    var isValid = true;
    for (var key in this.validators) {
      this.Errors[key] = this.validators[key]()
      if (this.Errors[key]) {
        isValid = false;
        return false;
      }
    }
    if (isValid) {
      this.navCtrl.push("OTPVerfication")
    }
  }


}
