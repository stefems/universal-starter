// home/home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'events',
  template: `
    <h1>Events</h1>
    <input (click)="loadEvents()" type="submit" value="Load Events">
  `
})
export class EventsComponent {
  constructor() {

  }
  loadEvents(): void {

  }
}