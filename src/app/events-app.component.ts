import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `<h1>Hello world</h1>
    <img src="/assets/images/basic-shield.png"/>
  `,
  styleUrls: ['./app.component.css']
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}