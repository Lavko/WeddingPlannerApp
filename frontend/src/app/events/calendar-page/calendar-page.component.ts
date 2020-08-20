import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CalendarEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import { AppState } from 'src/app/store/state/app.state';
import { getEventsAction } from './../../store/actions/calendar.actions';
import { calendarSelectors } from './../../store/state/calendar.state';
import { AddEventDialogComponent } from './../add-event-dialog/add-event-dialog.component';
import { EditEventDialogComponent } from './../edit-event-dialog/edit-event-dialog.component';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss'],
})
export class CalendarPageComponent implements OnInit {
  constructor(private store: Store<AppState>, public dialog: MatDialog) {}

  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  activeDayIsOpen = false;
  locale = 'pl';
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  events$ = calendarSelectors.getEvents(this.store);

  eventClicked({ event }: { event: CalendarEvent }): void {
    const dialogRef = this.dialog.open(EditEventDialogComponent, {
      width: '650px',
      data: event.meta.event,
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(AddEventDialogComponent, {
      width: '650px',
    });
  }

  dayClicked({ date, events }: { date: Date; events: any }): void {
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  ngOnInit() {
    this.store.dispatch(getEventsAction());
  }
}
