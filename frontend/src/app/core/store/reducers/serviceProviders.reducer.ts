import { createReducer, on } from '@ngrx/store';
import * as ServiceProvidersActions from '../actions/serviceProviders.actions';
import { ServiceProvidersState } from './../state/serviceProviders.state';

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
