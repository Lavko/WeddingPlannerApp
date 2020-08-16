import { Store } from '@ngrx/store';
import { GuestDto } from '~/app/api/models';
import { AppState } from '~/app/store/state/app.state';

export interface GuestState {
  guests: GuestDto[];
}

const getGuests = (store: Store<AppState>) => store.select((state) => state.guests.guests);

export const guestsSelectors = {
  getGuests,
};
