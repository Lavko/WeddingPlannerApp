import * as GuestsActions from '@core/store/actions/guests.actions';
import { GuestState } from '@core/store/state/guests.state';
import { createReducer, on } from '@ngrx/store';

export const initialGuestState: GuestState = {
  guests: [],
};

export const guestsReducer = createReducer(
  initialGuestState,
  on(GuestsActions.getGuestsSuccessAction, (state, props) => ({
    ...state,
    guests: props.guests,
  }))
);
