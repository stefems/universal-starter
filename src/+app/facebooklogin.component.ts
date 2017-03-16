import { Component } from '@angular/core';
import {FacebookService, FacebookInitParams, FacebookLoginResponse} from 'ng2-facebook-sdk';
 
@Component({
  selector: 'facebooklogin',
  template: `
  <div class="loginDiv">
    <p>Log In via {{text}}</p>
    <!-- input for username -->
    <input type="text" placeholder="username">
    <!-- input for password -->
    <input type="text" placeholder="password">
    <!-- button for submission -->
    <input (click)="checkLogin()" type="submit" value="Submit">
    <input (click)="doEventStuff()" type="submit" value="eventstuff">
  </div>
  <!-- Like and Share buttons (I guess they work?) -->
  <div class="fb-like"   data-share="true"   data-width="450"   data-show-faces="true">
  </div>
  `,
  styles: [``],
  providers: [FacebookService]
})

export class FacebookLoginComponent {

	text = 'facebook';

	constructor(private fb: FacebookService) {
		let fbParams: FacebookInitParams = {
                                   appId: '1928641050691340',
                                   xfbml: true,
                                   version: 'v2.8'
                                   };
    this.fb.init(fbParams);
	}
 	
  checkLogin(): void {
    this.fb.login().then(
      (response: FacebookLoginResponse) => console.log(response), (error: any) => console.error(error)
    );
	}

  doEventStuff(): void {
    this.fb.api("/100000975458441/events").then( function(response) {
      console.log(response.data);
    }
    );
  }
}