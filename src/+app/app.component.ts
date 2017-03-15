import { Component, Directive, ElementRef, Renderer, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { Venue }          from './venue';

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
  <facebooklogin></facebooklogin>
  <ul class="venueList">
    <li *ngFor="let venue of venues">
      <span>{{venue.name}}</span> <a href={{venue.url}}>Page</a>
    </li>
  </ul>
  `
})

export class AppComponent {
  title = 'ftw';
  venues = null;


  /*getVenues(): void {
    this.venueService.getVenues().then(venues => this.venues = venues);
  }
  */
  ngOnInit(): void {
    this.venues = [{id:1, name:"Hi Dive", url:"u1"}, {id:2, name:"Larimer Lounge", url:"u2"}];
  }
}
