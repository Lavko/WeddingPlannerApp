import { createReducer, on } from '@ngrx/store';
import * as GuestsActions from '../actions/guests.actions';
import { GuestState } from './../state/guests.state';

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
