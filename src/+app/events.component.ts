// home/home.component.ts
import { ViewChild, ViewChildren, QueryList, ElementRef, Component, Input } from '@angular/core';
import {FacebookService, FacebookInitParams, FacebookLoginResponse} from 'ng2-facebook-sdk';


// used to get the global soundcloud variable from the imported script in index.html
declare var SC:any;
declare var fbAppId:any;

@Component({
  selector: 'events',
  template: `
    <h1>Events</h1>
    <button (click) = "getEvents()">Load Events</button>
    <li *ngFor="let event of events">
      <span>{{event.eventTitle}}</span>
    </li>

    <h1>Player:</h1>
	<iframe #soundcloudWidget id="soundcloud_widget"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/317619385&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp&auto_play=true"
      width="420"
      height="120"
      frameborder="no">
    </iframe>
  `,
  styles: [`
  	#soundcloud_widget {
  		display: none;
  	}
  `],
})
export class EventsComponent {

	@Input("token") token: string;

	@ViewChild('soundcloudWidget') soundcloudWidget: ElementRef;

    venue = "/HiDiveDenver/events?=access_token=" + fbAppId + "|";
    events = [{"eventTitle": "empty"}];
    attempts = 0;
	constructor(private fb: FacebookService) {
	    let fbParams: FacebookInitParams = {
	                                   appId: fbAppId,
	                                   xfbml: true,
	                                   version: 'v2.8'
	                                   };
	    this.fb.init(fbParams);
	}
	ngAfterViewInit() {
		console.log("ngAfterViewInit()");
		var newsong = 'https://api.soundcloud.com/tracks/311739465';
		var scId = this.soundcloudWidget.nativeElement.id;
		var widget = SC.Widget(scId);
		widget.bind(SC.Widget.Events.READY, function() {
			widget.pause();
			//widget.load(newsong);
		});

	}
	//TODO: Add a date filter to prevent loading of expired events
	public getEvents = (URL): void => {
		console.log("getEvents()");
		
		if (typeof URL == "undefined" ) {
			URL = this.venue;
		}
		this.fb.api(URL).then(
		  function(response) {
		    console.log("trying to find events");
		    if (response && !response.error && response.data != null
		      && typeof response.data != null && response.data.length != 0) {


		      for (let i = 0; i < response.data.length; i++) {
		        console.log(response.data[i].name + " " + response.data[i].start_time);
		        this.events.push({eventTitle: response.data[i].name});
		      }
		      
		      if (response.paging.next && this.attempts < 3) {
		      	this.attempts = this.attempts + 1;
		        console.log("calling getEvents() again!");
		        this.getEvents(response.paging.next);         
		      }
		      else {
		        console.log("next isn't a thing, fam");
		      }          
		    }
		    else {
		      console.log("no more pagination, fam");
		    }
		  }.bind(this));
	}
}

/*
<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/311739465&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
*/