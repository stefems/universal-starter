import { Component, Directive, ElementRef, Renderer, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular2/router';
import {Home} from './home.component.ts';
import {FacebookLoginComponent} from './facebooklogin.component.ts';

//
/////////////////////////
// ** Example Directive
// Notice we don't touch the Element directly

@Directive({
  selector: '[xLarge]'
})

export class XLargeDirective {
  constructor(element: ElementRef, renderer: Renderer) {
    // ** IMPORTANT **
    // we must interact with the dom through -Renderer-
    // for webworker/server to see the changes
    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    // ^^
  }
}

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app',
  styles: [`

  `],
  directives: [ROUTER_DIRECTIVES],
  template: `
  <h1>{{title}}</h1>
  <router-outlet></router-outlet>
  <!--ul class="venueList">
    <li *ngFor="let venue of venues">
      <span>{{venue.name}}</span> <a href={{venue.url}}>Page</a>
    </li>
  </ul-->
  `
})

@RouteConfig([
  { path: '/', name: 'Login', component: FacebookLoginComponent, useAsDefault: true },
  { path: '/home', name: 'Home', component: Home}
])
export class AppComponent {
  title = 'Showstopper';
  venues = null;

  ngOnInit(): void {
    this.venues = [{id:1, name:"Hi Dive", url:"https://www.facebook.com/HiDiveDenver/"}, {id:2, name:"Larimer Lounge", url:"https://www.facebook.com/larimerlounge/"}];
  }
}
