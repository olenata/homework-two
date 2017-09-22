import {Injectable} from '@angular/core';
import { Purchase } from './app.purchase';
@Injectable()
export class PurchasesService {
    purchases = [
                new Purchase(1, "Bananas", "Bananas", false),
                new Purchase(2, "Lemons", "Lemons",true),
                new Purchase(3, "Water", "Water",false),
                new Purchase(4, "Juice", "Juice",false),
                new Purchase(5, "Milk", "Milk",false)
                ];

    newPurchase: string;

    getPurchases() {
        return this.purchases;
    }

  addPurchase(name: string, description: string) {
    if (name) {
      this.purchases.push(new Purchase(this.purchases.length + 1, name, description, false));
      name = '';
      description = '';
     }
  }

  boughtPurchase(currentPurchase: Purchase) {
    currentPurchase.isBought = true;
  }    

  getPurchase(id: number) {
      console.log(this.getPurchases());
    return this.getPurchases().find(purchase => purchase.id === id);
  }
}