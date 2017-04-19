// home/home.component.ts
import { ViewChild, ViewChildren, QueryList, ElementRef, Component } from '@angular/core';


@Component({
  selector: 'event',
  template: `
    <h2>{{eventTitle}}</h2>
    <h3>{{eventVenue}}</h3>
    <h3>{{eventDate}}</h3>
  `,
  styles: [`
  	
  `],
})
export class EventComponent {
  eventTitle = "";
  eventVenue = "";
  eventDate = "";

	constructor() {

	}
	ngAfterViewInit() {

	}
  
}
