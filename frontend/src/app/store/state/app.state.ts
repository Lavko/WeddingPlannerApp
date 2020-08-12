import { AuthState } from './auth.state';
import { GuestState } from './guests.state';

export interface AppState {
  auth: AuthState;
  guests: GuestState;
}
