import * as ServiceProvidersActions from '@core/store/actions/serviceProviders.actions';
import { ServiceProvidersState } from '@core/store/state/serviceProviders.state';
import { createReducer, on } from '@ngrx/store';

export const initialServiceProvidersState: ServiceProvidersState = {
  serviceProviders: [],
};

export const serviceProvidersReducer = createReducer(
  initialServiceProvidersState,
  on(ServiceProvidersActions.getServiceProvidersSuccessAction, (state, props) => ({
    ...state,
    serviceProviders: props.serviceProviders,
  }))
);
