import * as LoadersActions from '@core/store/actions/loaders.actions';
import { LoaderState } from '@core/store/state/loader.state';
import { createReducer, on } from '@ngrx/store';

export const initialLoadersState: LoaderState = {
  loaders: {},
};

export const loadersReducer = createReducer(
  initialLoadersState,
  on(LoadersActions.enableLoader, (state, props) => {
    const loaders = state.loaders;
    loaders[props.loaderName] = true;
    return {
      ...state,
      loaders,
    };
  }),
  on(LoadersActions.disableLoader, (state, props) => {
    const loaders = state.loaders;
    loaders[props.loaderName] = false;
    return {
      ...state,
      loaders,
    };
  })
);
