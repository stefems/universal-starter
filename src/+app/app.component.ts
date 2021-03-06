import { Component, Directive, ElementRef, Renderer, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import {FacebookLoginComponent} from './facebooklogin.component';
import {EventsComponent} from './events.component';


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
  template: `
  <h1>{{title}}</h1>
  <!--a [routerLink]="['/']">Login</a>
  <a [routerLink]="['/events']">Events</a-->
  <div class="outer-outlet">
      <router-outlet></router-outlet>
  </div>
  `
})


export class AppComponent {
  title = 'Showstopper';


  ngOnInit(): void {
  }
}
