import {Component, NgModule} from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser'
import { Purchase } from './app.purchase';

@Component({
  selector: 'purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent {
  purchases = [
      new Purchase("Bananas", false),
      new Purchase("Lemons", true),
      new Purchase("Water", false),
      new Purchase("Juice", false)
      ];

  newPurchase: string;

  addPurchase(newPurchase: string) {
    if (newPurchase) {
      this.purchases.push(new Purchase(newPurchase, false));
      newPurchase = '';
     }
  }

  boughtPurchase(currentPurchase: Purchase) {
    currentPurchase.isBought = true;
  }

}

@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ PurchasesComponent ],
  bootstrap: [ PurchasesComponent ]
})

export class PurchasesModule {
  
}