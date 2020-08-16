import { Store } from '@ngrx/store';
import { ServiceProviderDto } from '~/app/api/models';
import { AppState } from '~/app/store/state/app.state';

export interface ServiceProvidersState {
  serviceProviders: ServiceProviderDto[];
}

const getServiceProviders = (store: Store<AppState>) =>
  store.select((state) => state.serviceProviders.serviceProviders);

export const serviceProvidersSelectors = {
  getServiceProviders,
};
