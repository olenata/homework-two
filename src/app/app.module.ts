import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }        from './app.component';
import { PurchasesComponent } from './purchases.component';
import { NewItemComponent } from './new.component';
import { ItemDetailComponent } from './item-detail.component';
import { PurchasesService } from './app.service';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PurchasesComponent,
    NewItemComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PurchasesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
