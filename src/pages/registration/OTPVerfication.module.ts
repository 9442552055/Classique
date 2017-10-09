
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { OTPVerficationPage } from "./OTPVerfication";

@NgModule({
  declarations: [
    OTPVerficationPage
  ],
  imports: [
   
    IonicPageModule.forChild(OTPVerficationPage)
  ],
  
  entryComponents: [
    OTPVerficationPage
  ]
})
export class OTPVerficationModule { }