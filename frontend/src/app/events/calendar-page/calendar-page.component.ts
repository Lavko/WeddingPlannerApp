import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss'],
})
export class CalendarPageComponent implements OnInit {
  constructor() {}

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  locale = 'pl';

  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;

  events: CalendarEvent[] = [
    {
      title: 'Click me',
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
      },
      start: new Date(),
    },
    {
      title: 'Or click me',
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
      },
      start: new Date(),
    },
  ];

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  }

  ngOnInit() {}
}
