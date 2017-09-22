import {Component, NgModule, OnInit} from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { Router } from '@angular/router';

import { Purchase } from './app.purchase';
import { PurchasesService } from './app.service';

@Component({
  selector: 'purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css'],
  providers: []
})
export class PurchasesComponent {
   purchases: Purchase[];
   selectedItem: Purchase;

   constructor(
     private router: Router,
     private appService: PurchasesService) { }  

   ngOnInit(): void { 
      this.getPurchases(); 
   } 

   getPurchases(): void {
    this.purchases = this.appService.getPurchases();
  }

  gotoDetail(item: Purchase): void {
    this.selectedItem = item;
    
    this.router.navigate(['/detail', this.selectedItem.id]);
  }

  

}
