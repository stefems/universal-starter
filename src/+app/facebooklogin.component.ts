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
  token = "";

	constructor(private fb: FacebookService, private router: Router,) {
		let fbParams: FacebookInitParams = {
                                   appId: '1928641050691340',
                                   xfbml: true,
                                   version: 'v2.8'
                                   };
    this.fb.init(fbParams);
	}
 	
  checkLogin(): void {
    this.fb.login().then(
      (response: FacebookLoginResponse) => this.success(), (error: any) => this.failure()
    );
  }  
  success(): void {
    this.loginStatusMessage = "Logged into Facebook.";
    this.loginStatus = true;
    this.fb.getLoginStatus().then(
      function(result) {
        this.setToken(result);
    }.bind(this));
    
    //The code below successfully navigates to the other page
    //this.router.navigate(['/events']);
    //The code below posts to facebook.
    //this.fb.api('/me/feed', 'post', {message: 'please ignore this status; testing facebook app stuffs' });
  }
  setToken(response): void {
    console.log("setToken()");
    console.log(response.authResponse.accessToken);
    if (response.authResponse.accessToken != "") { 
      this.getEvents("/HiDiveDenver/events?=access_token=1928641050691340|" + response.authResponse.accessToken, this);
    }
  }
  getEvents(URL, context): void {
    context.fb.api(URL).then(
      function(response) {
        console.log("trying to find events");
        if (response && !response.error && response.data != null
          && typeof response.data != null && response.data.length != 0) {

          console.log(response);

          for (let i = 0; i < response.data.length; i++) {
            console.log(response.data[i].start_time);
          }
          
          if (response.paging.next) {
            console.log("calling getEvents() again!");
            context.getEvents(response.paging.next);         
          }
          else {
            console.log("next isn't a thing, fam");
          }          
        }
        else {
          console.log("no more pagination, fam");
        }
      }
    );
  }
  failure(): void {
    console.error("facebook login eror");
    //put text on page showing error
  }
}