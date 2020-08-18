import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';

export interface LoaderState {
  loaders: {};
}

const getLoaders = (store: Store<AppState>) => store.select((state) => state.loaders.loaders);

export const loadersSelectors = {
  getLoaders,
};
