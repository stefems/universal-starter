// home/home.component.ts
import { Component } from '@angular/core';

declare var soundCloud:any;

@Component({
  selector: 'events',
  template: `
    <h1>Events</h1>
    <input (click)="loadEvents()" type="submit" value="Load Events">
    <h1>Player:</h1>
    <object height="81" width="100%" id="yourPlayerId" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">
	  <param name="movie" value="http://player.soundcloud.com/player.swf?url=http%3A%2F%2Fsoundcloud.com%2Fmatas%2Fhobnotropic&enable_api=true&object_id=yourPlayerId"></param>
	  <param name="allowscriptaccess" value="always"></param>
	  <embed allowscriptaccess="always" height="81" src="http://player.soundcloud.com/player.swf?url=http%3A%2F%2Fsoundcloud.com%2Fmatas%2Fhobnotropic&enable_api=true&object_id=yourPlayerId" type="application/x-shockwave-flash" width="100%" name="yourPlayerId"></embed>
	</object>
  `
})
export class EventsComponent {

	constructor() {

	}
	loadEvents(): void {

	}
}