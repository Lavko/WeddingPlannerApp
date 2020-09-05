import { GuestDto } from '@core/api/models';
import { AppState } from '@core/store/state/app.state';
import { Store } from '@ngrx/store';

export interface GuestState {
  guests: GuestDto[];
}

const getGuests = (store: Store<AppState>) => store.select((state) => state.guests.guests);

export const guestsSelectors = {
  getGuests,
};
