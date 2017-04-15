import { Component } from '@angular/core';
import {FacebookService, FacebookInitParams, FacebookLoginResponse} from 'ng2-facebook-sdk';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {routes} from './app.routes';

@Component({
  selector: 'facebooklogin',
  template: `
  <div class="loginDiv">
    <p>Log In via {{text}}.</p>
    <input (click)="checkLogin()" type="submit" value="Submit">
  </div>
  `,
  styles: [`
  `],
  providers: [FacebookService]
})

export class FacebookLoginComponent {

	text = 'Facebook';
  loginStatusMessage = 'Not logged in.';
  loginStatus = false;

	constructor(private fb: FacebookService, private router: Router,) {
		let fbParams: FacebookInitParams = {
                                   appId: '1928641050691340',
                                   xfbml: true,
                                   version: 'v2.8'
                                   };
    this.fb.init(fbParams);
	}
 	
  checkLogin(): void {
    this.fb.login({scope: 'publish_actions'}).then(
      (response: FacebookLoginResponse) => this.success(), (error: any) => this.failure()
    );
  }  
  success(): void {
    this.loginStatusMessage = "Logged into Facebook.";
    this.loginStatus = true;
    var token = "";
    this.fb.getLoginStatus().then(function(response) {
       token = response.authResponse.accessToken;
       console.log(token);
    });
    //The code below successfully navigates to the other page
    //this.router.navigate(['/events']);
    //The code below posts to facebook.
    //this.fb.api('/me/feed', 'post', {message: 'please ignore this status; testing facebook app stuffs' });
    function getEvents() {
      this.fb.api("/HiDiveDenver/events?=access_token=1928641050691340|" + token).then(
        function(response) {
          console.log("trying to find events");
          if (response && !response.error) {
            console.log(response);

            for (let i = 0; i < response.data.length; i++) {
              console.log(response.data[i].start_time);
            }
            if (response.paging != null && response.paging.next != null && response.paging.next != "undefined" && response.paging.next != undefined) {
              console.log("calling getEvents() again!");
              getEvents();
            }
            
          }
        });
    }
    getEvents();

  }
  failure(): void {
    console.error("facebook login eror");
    //put text on page showing error
  }
}