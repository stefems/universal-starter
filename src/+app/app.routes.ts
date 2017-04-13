/*
Our route config defines all the routes in our application.
*/

import { Routes } from '@angular/router';

import { FacebookLoginComponent } from './facebooklogin.component';
import { EventsComponent } from './events.component';

export const routes: Routes = [
  { path: '',  component: FacebookLoginComponent },
  { path: 'events', component: EventsComponent }
];


