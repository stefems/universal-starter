import { Component } from '@angular/core';
import {FacebookService, FacebookInitParams, FacebookLoginResponse} from 'ng2-facebook-sdk';
 
@Component({
  selector: 'facebooklogin',
  template: `
  <div class="loginDiv">
    <p>Log In via {{text}}. Status: {{logStatus}}</p>
    <input [ngClass]="{invisible: hasInvisibleClass}" (click)="checkLogin()" type="submit" value="Submit">
  </div>
  `,
  styles: [`
  .invisible {
    display: none;
  }
  `],
  providers: [FacebookService]
})

export class FacebookLoginComponent {

	text = 'Facebook';
  logStatus = 'Not logged in.';
  hasInvisibleClass = false;

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
      (response: FacebookLoginResponse) => success(), (error: any) => failure()
    );
    function success() {
      this.logStatus = "logged in as " + "";
      this.hasInvisibleClass = true;
      console.log("Login successful.")
      //remove this component and add the default calendar one
    }
    function failure() {
      console.error("facebook login eror")
      //put text on page showing error
    }
  }
}