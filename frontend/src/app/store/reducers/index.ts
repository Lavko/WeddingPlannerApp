import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { authReducer, initialAuthState } from './auth.reducer';
import { guestsReducer, initialGuestState } from './guests.reducer';

export const initialState: AppState = {
  auth: initialAuthState,
  guests: initialGuestState,
};

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  guests: guestsReducer,
};
