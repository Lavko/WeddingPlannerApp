import { createReducer, on } from '@ngrx/store';
import * as LoadersActions from './../actions/loaders.actions';
import { LoaderState } from './../state/loader.state';

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
