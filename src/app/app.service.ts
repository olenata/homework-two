import {Injectable} from '@angular/core';
import { Purchase } from './app.purchase';
@Injectable()
export class PurchasesService {
    purchases = [
                new Purchase("Bananas", false),
                new Purchase("Lemons", true),
                new Purchase("Water", false),
                new Purchase("Juice", false)
                ];

    newPurchase: string;

    getPurchases() {
        return this.purchases;
    }

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