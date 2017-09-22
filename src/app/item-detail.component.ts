import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Purchase } from './app.purchase';
 
import { PurchasesService }  from './app.service';
@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: [ './item-detail.component.css' ],
  providers: []
})
export class ItemDetailComponent implements OnInit {
  purchase: Purchase;

  constructor(
    private appService: PurchasesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: ParamMap) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.purchase = this.appService.getPurchase(id);

      } 
    });
  }

  boughtPurchase(currentPurchase: Purchase): void {
    this.appService.boughtPurchase(currentPurchase);
  }

  goBack(): void {
    this.location.back();
  }
}
