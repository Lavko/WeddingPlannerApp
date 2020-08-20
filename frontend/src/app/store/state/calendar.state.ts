import { Store } from '@ngrx/store';
import { CalendarEvent } from 'angular-calendar';
import { AppState } from 'src/app/store/state/app.state';
import { EventDto } from './../../api/models/event-dto';

export interface CalendarState {
  events: CalendarEvent<{ event: EventDto }>[];
}

const getEvents = (store: Store<AppState>) => store.select((state) => state.calendar.events);

export const calendarSelectors = {
  getEvents,
};
