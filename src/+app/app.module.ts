import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeModule } from './+home/home.module';
import { AboutModule } from './+about/about.module';
import { TodoModule } from './+todo/todo.module';
//new----
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
//-------
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, XLargeDirective } from './app.component';
import { FacebookLoginComponent }  from './facebooklogin.component';
import { EventsComponent }  from './events.component';


@NgModule({
  declarations: [ AppComponent, 
  XLargeDirective,
  FacebookLoginComponent,
  EventsComponent
 ],
  imports: [
    SharedModule,
    HomeModule,
    AboutModule,
    TodoModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ]
})
export class AppModule {
}

export { AppComponent } from './app.component';
