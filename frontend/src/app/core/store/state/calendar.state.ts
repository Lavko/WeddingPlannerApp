import { Store } from '@ngrx/store';
import { CalendarEvent } from 'angular-calendar';
import { EventDto } from 'src/app/core/api/models/event-dto';
import { AppState } from 'src/app/core/store/state/app.state';

export interface CalendarState {
  events: CalendarEvent<{ event: EventDto }>[];
}

const getEvents = (store: Store<AppState>) => store.select((state) => state.calendar.events);

export const calendarSelectors = {
  getEvents,
};
