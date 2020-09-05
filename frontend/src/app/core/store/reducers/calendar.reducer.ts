import * as CalendarActions from '@core/store/actions/calendar.actions';
import { CalendarState } from '@core/store/state/calendar.state';
import { createReducer, on } from '@ngrx/store';

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
