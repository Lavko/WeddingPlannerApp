import { AppState } from '@core/store/state/app.state';
import { Store } from '@ngrx/store';

export interface LoaderState {
  loaders: {};
}

const getLoaders = (store: Store<AppState>) => store.select((state) => state.loaders.loaders);

export const loadersSelectors = {
  getLoaders,
};
