// home/home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'events',
  template: `
    <h1>Events</h1>
    <input (click)="loadEvents()" type="submit" value="Load Events">
    <h1>Player JavaScript API - simple listener implementation (JS Library agnostic)</h1>
	<script type="text/javascript" charset="utf-8" src="../soundcloud.player.api.js"></script>
	<script type="text/javascript" charset="utf-8">

	// ------- a simple auto-play example ----------
	// please refer to the documentation for the full list of available events
	soundcloud.addEventListener('onPlayerReady', function(player, data) {
	  // please refer to the documentation for the full list of available methods
	  // btw, here the flash can be accessed too as 'this' like in 'this.api_play()'
	  player.api_play();
	});
  
  </script>
  `
})
export class EventsComponent {
  constructor() {

  }
  loadEvents(): void {

  }
}