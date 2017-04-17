// home/home.component.ts
import { Component } from '@angular/core';

declare var soundCloud:any;

@Component({
  selector: 'events',
  template: `
    <h1>Events</h1>
    <input (click)="loadEvents()" type="submit" value="Load Events">
    <h1>Player:</h1>
    <object height="81" width="100%" id="scTest" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">
	  <param name="movie" value="http://player.soundcloud.com/player.swf?url=http%3A%2F%2Fsoundcloud.com%2Fmatas%2Fhobnotropic&enable_api=true&object_id=scTest">
	  <param name="allowscriptaccess" value="always">
	  <embed allowscriptaccess="always" height="81" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/317619385&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true&object_id=scTest" type="application/x-shockwave-flash" width="100%" name="scTest">
	</object>
  `
})
export class EventsComponent {

	constructor() {

	}
	loadEvents(): void {

	}
}