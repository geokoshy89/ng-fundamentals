import { Component } from '@angular/core';
@Component({
    selector:'events-list',
    template:`
    <div>
        <h1>Upcoming angular events</h1>
        <hr>
        <event-thumbnail [event]="event"  (eventClick)="handleEventClicked($event)"></event-thumbnail>
    </div>
    `
})
export class EventsListComponent{
    handleEventClicked(data){
        console.log(`received ${data}`);
    }
    event={
        id:1,
        name:'Angular Component',
        date: '09/22/2020',
        time:'10:00 am',
        price:599.99,
        imageUrl:'/assets/images/angularconnect-shield.png',
        location:{
            address:'1057 DT',
            city:'London',
            country:'England'
        }
    }
}