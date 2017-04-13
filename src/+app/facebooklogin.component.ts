import { Component } from '@angular/core';
import {FacebookService, FacebookInitParams, FacebookLoginResponse} from 'ng2-facebook-sdk';
 
@Component({
  selector: 'facebooklogin',
  template: `
  <div class="loginDiv">
    <p>Log In via {{text}}</p>
    <input (click)="checkLogin()" type="submit" value="Submit">
  </div>
  `,
  styles: [``],
  providers: [FacebookService]
})

export class FacebookLoginComponent {

	text = 'Facebook';

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
      (response: FacebookLoginResponse) => test(), (error: any) => other()
    );
    function test() {
      console.log("Login successful.")
    }
    function other() {
      console.error("facebook login eror")
    }
  }
}