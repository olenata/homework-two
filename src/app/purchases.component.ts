import {Component, NgModule, OnInit} from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { Purchase } from './app.purchase';
import { PurchasesService } from './app.service';

@Component({
  selector: 'purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css'],
  providers: [PurchasesService]
})
export class PurchasesComponent {
   purchases = [];
   constructor(private appService: PurchasesService) { }  

   ngOnInit(): void { 
      this.getPurchases(); 
   } 

   getPurchases(): void {
    this.purchases = this.appService.getPurchases();
  }

  boughtPurchase(currentPurchase: Purchase): void {
    this.appService.boughtPurchase(currentPurchase);
  }

  addPurchase(newPurchase: string): void {
    this.appService.addPurchase(newPurchase);
  }
}

@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ PurchasesComponent ],
  bootstrap: [ PurchasesComponent ],
  providers: [PurchasesService]
  })
export class PurchasesModule {
  
}