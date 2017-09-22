import { Component } from '@angular/core';
 
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/new" routerLinkActive="active">Add New</a>
      <a routerLink="/purchases" routerLinkActive="active">List of Purchases</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Purchases';
}