import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { authReducer, initialAuthState } from './auth.reducer';
import { budgetReducer, initialBudgetState } from './budget.reducer';
import { guestsReducer, initialGuestState } from './guests.reducer';
import { initialServiceProvidersState, serviceProvidersReducer } from './serviceProviders.reducer';

export const initialState: AppState = {
  user: initialAuthState,
  guests: initialGuestState,
  budget: initialBudgetState,
  serviceProviders: initialServiceProvidersState,
};

export const reducers: ActionReducerMap<AppState> = {
  user: authReducer,
  guests: guestsReducer,
  budget: budgetReducer,
  serviceProviders: serviceProvidersReducer,
};
