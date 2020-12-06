import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import {NavBarComponent} from './nav/navbar.component';
import { EventsAppComponent } from './events-app.component';

import { EventsListComponent,
         EventThumbnailComponent,
         CreateEventComponent,
         EventListResolverService ,
         EventService ,
         EventRouteActivatot as EventRouteActivator,
         EventDetailsComponent } from './events/index';

import {ToastrService} from './common/toastr.service';
import {appRoutes} from './routes';

import { Error404Component } from './errors/404.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers:[EventService,
             ToastrService,
             EventRouteActivator,
             {provide:'canDeactivateCreateEvent',useValue:checkDirtyState},
             EventListResolverService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this event .Do you want to leave this page?')
  }
  return true;
}
