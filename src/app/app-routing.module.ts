import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewItemComponent }   from './new.component';
import { PurchasesComponent }      from './purchases.component';
import { ItemDetailComponent }  from './item-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/purchases', pathMatch: 'full' },
  { path: 'new',  component: NewItemComponent },
  { path: 'detail/:id', component: ItemDetailComponent },
  { path: 'purchases',     component: PurchasesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}