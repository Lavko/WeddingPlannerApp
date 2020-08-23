import { Store } from '@ngrx/store';
import { AppState } from './app.state';
export interface UserState {
  token: string;
  userId: number;
  email: string;
  firstName: string;
  plannerId: number;
}

const getToken = (store: Store<AppState>) => store.select((state) => state.user.token);
const getUserId = (store: Store<AppState>) => store.select((state) => state.user.userId);
const getEmail = (store: Store<AppState>) => store.select((state) => state.user.email);
const getFirstName = (store: Store<AppState>) => store.select((state) => state.user.firstName);
const getPlannerId = (store: Store<AppState>) => store.select((state) => state.user.plannerId);

export const userSelectors = {
  getToken,
  getUserId,
  getEmail,
  getFirstName,
  getPlannerId,
};
