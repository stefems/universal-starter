import { Component, Directive, ElementRef, Renderer, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { Venue }          from './venue';
import { VenueService }   from './venue.service';

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
  `,
  providers: [VenueService]
})
export class AppComponent {
  title = 'ftw';
  venues = Venue[];

  constructor(private venueService: VenueService) { }

  getVenues(): void {
    this.venueService.getVenues().then(venues => this.venues = venues);
  }
  ngOnInit(): void {
    this.getVenues();
  }
}
