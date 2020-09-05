import { EventDto } from '@core/api/models/event-dto';
import { AppState } from '@core/store/state/app.state';
import { Store } from '@ngrx/store';
import { CalendarEvent } from 'angular-calendar';

export interface CalendarState {
  events: CalendarEvent<{ event: EventDto }>[];
}

const getEvents = (store: Store<AppState>) => store.select((state) => state.calendar.events);

export const calendarSelectors = {
  getEvents,
};
