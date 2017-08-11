import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PurchasesComponent } from './purchases.component';



@NgModule({
  declarations: [
    PurchasesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PurchasesComponent]
})
export class AppModule { }
