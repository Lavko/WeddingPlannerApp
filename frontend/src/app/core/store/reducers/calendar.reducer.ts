import { createReducer, on } from '@ngrx/store';
import * as CalendarActions from './../actions/calendar.actions';
import { CalendarState } from './../state/calendar.state';

export const initialCalendarState: CalendarState = {
  events: [],
};

export const calendarReducer = createReducer(
  initialCalendarState,
  on(CalendarActions.getEventsSuccessAction, (state, props) => ({
    ...state,
    events: props.events,
  }))
);
