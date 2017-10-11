
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { RegistrationPage } from "./registration";
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    RegistrationPage
  ],
  imports: [
   FormsModule,
    IonicPageModule.forChild(RegistrationPage)
  ],
  
  entryComponents: [
    RegistrationPage
  ]
})
export class RegistrationModule { 
}