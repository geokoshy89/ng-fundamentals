import {Routes} from '@angular/router';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivatot } from './events/event-details/event-route-activator.service';
import { EventListResolverService } from './events/event-list-resolver.service';
import { EventsListComponent } from './events/events-list.component';

export const appRoutes:Routes=[
    {path:'events/new',component:CreateEventComponent,
    canDeactivate:['canDeactivateCreateEvent']},
    {path:'events',component:EventsListComponent,resolve:{events:EventListResolverService}},
    {path:'events/:id',component:EventDetailsComponent,canActivate:[EventRouteActivatot]},
    {path:'404',component:Error404Component},
    {path:'',redirectTo:'/events',pathMatch:'full'}
]