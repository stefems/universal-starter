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
    this.fb.login().then(
      (response: FacebookLoginResponse) => this.success(), (error: any) => this.failure()
    );
  }
  success(): void {
    this.loginStatusMessage = "Logged into Facebook.";
    this.loginStatus = true;
    this.router.navigate(['/events']);
  }
  failure(): void {
    console.error("facebook login eror");
    //put text on page showing error
  }
}