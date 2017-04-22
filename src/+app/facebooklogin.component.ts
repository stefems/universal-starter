import { Component, Input } from '@angular/core';
import {FacebookService, FacebookInitParams, FacebookLoginResponse} from 'ng2-facebook-sdk';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {routes} from './app.routes';
import {EventsComponent} from './events.component';

import './.env.js';

declare var fbAppId:any;


@Component({
  selector: 'facebooklogin',
  template: `
  <div class="loginDiv">
    <p>Log in via Facebook.</p>
    <input (click)="checkLogin()" type="submit" value="Submit">
  </div>
  <events [token]="token"></events>
  `,
  styles: [`
 
  `],
  providers: [FacebookService]
})

export class FacebookLoginComponent {


  @Input() token = "";

  constructor(private fb: FacebookService, private router: Router,) {
    let fbParams: FacebookInitParams = {
                                   appId: 'fbAppId',
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
    this.fb.getLoginStatus().then(
      function(result) {
        if (result.authResponse.accessToken != "") { 
          this.token = result.authResponse.accessToken;
        }
        else {
          console.log("token acquisition error");
        }
    }.bind(this));
    
    //The code below successfully navigates to the other page
    //this.router.navigate(['/events']);
  }
  
  failure(): void {
    console.error("facebook login eror");
    //put text on page showing error
  }
}

//The code below posts to facebook. -> this.fb.api('/me/feed', 'post', {message: 'please ignore this status; testing facebook app stuffs' });