import { Store } from '@ngrx/store';
import { ServiceProviderDto } from 'src/app/api/models';
import { AppState } from 'src/app/store/state/app.state';

export interface ServiceProvidersState {
  serviceProviders: ServiceProviderDto[];
}

const getServiceProviders = (store: Store<AppState>) =>
  store.select((state) => state.serviceProviders.serviceProviders);

export const serviceProvidersSelectors = {
  getServiceProviders,
};
