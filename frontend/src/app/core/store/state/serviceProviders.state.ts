import { ServiceProviderDto } from '@core/api/models';
import { AppState } from '@core/store/state/app.state';
import { Store } from '@ngrx/store';

export interface ServiceProvidersState {
  serviceProviders: ServiceProviderDto[];
}

const getServiceProviders = (store: Store<AppState>) =>
  store.select((state) => state.serviceProviders.serviceProviders);

export const serviceProvidersSelectors = {
  getServiceProviders,
};
