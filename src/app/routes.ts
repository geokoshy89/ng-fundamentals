import {Routes} from '@angular/router';
import { Error404Component } from './errors/404.component';
import { UserModule } from './user/user.module';
import { EventsListComponent,
    CreateEventComponent,
    EventListResolverService ,
    EventRouteActivatot,
    EventDetailsComponent } from './events/index';
export const appRoutes:Routes=[
    {path:'events/new',component:CreateEventComponent,
    canDeactivate:['canDeactivateCreateEvent']},
    {path:'events',component:EventsListComponent,resolve:{events:EventListResolverService}},
    {path:'events/:id',component:EventDetailsComponent,canActivate:[EventRouteActivatot]},
    {path:'404',component:Error404Component},
    {path:'',redirectTo:'/events',pathMatch:'full'},
    {path:'user',loadChildren:()=>UserModule}
]