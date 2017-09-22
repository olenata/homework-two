import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PurchasesComponent } from './purchases.component';
import { PurchasesService } from './app.service';


@NgModule({
  declarations: [
    PurchasesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PurchasesService],
  bootstrap: [PurchasesComponent]
})
export class AppModule { }
