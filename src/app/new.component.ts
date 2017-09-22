import { Component } from '@angular/core';
import { PurchasesService } from './app.service';
import { Location } from '@angular/common';

@Component({
  selector: 'new-item',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  providers: []
})
export class NewItemComponent {

  constructor(
    private appService: PurchasesService,
    private location: Location) { }  

  addPurchase(title: string, description: string): void {
    this.appService.addPurchase(title, description);
  }

  goBack(): void {
    this.location.back();
  }
}