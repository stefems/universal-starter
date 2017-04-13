/*
Our route config defines all the routes in our application.
*/

import { Routes } from '@angular/router';

import { FacebookloginComponent } from './facebooklogincomponent.component';
import { EventsComponent } from './eventscomponent.component';

export const routes: Routes = [
  { path: '', component: FacebookloginComponent },
  { path: 'events', component: EventsComponent }
];


