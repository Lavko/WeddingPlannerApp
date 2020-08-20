import { createAction, props } from '@ngrx/store';
import { ServiceProviderDto, UpdateServiceProviderDto } from '~/app/api/models';
import { CreateServiceProviderDto } from '~/app/api/models/create-service-provider-dto';

export const getServiceProvidersAction = createAction('[Service Providers List Page] Get service providers');
export const getServiceProvidersSuccessAction = createAction(
  '[Service Providers List Page] Get service providers success',
  props<{ serviceProviders: ServiceProviderDto[] }>()
);
export const getServiceProvidersFailureAction = createAction(
  '[Service Providers List Page] Get service providers failure',
  props<{ error: any }>()
);

export const saveNewServiceProviderAction = createAction(
  '[Add Service Providers Dialog] Save new service provider',
  props<{ serviceProvider: CreateServiceProviderDto }>()
);
export const saveNewServiceProviderSuccessAction = createAction(
  '[Add Service Providers Dialog] Save new service provider success'
);
export const saveNewServiceProviderFailureAction = createAction(
  '[Add Service Providers Dialog] Save new service provider failure',
  props<{ error: any }>()
);

export const saveEditedServiceProviderAction = createAction(
  '[Edit Service Providers Dialog] Save edited service provider',
  props<{ serviceProvider: UpdateServiceProviderDto }>()
);
export const saveEditedServiceProviderSuccessAction = createAction(
  '[Edit Service Providers Dialog] Save edited service provider success'
);
export const saveEditedServiceProviderFailureAction = createAction(
  '[Edit Service Providers Dialog] Save edited service provider failure',
  props<{ error: any }>()
);

export const deleteServiceProviderAction = createAction(
  '[Service Providers List Page] Delete service provider',
  props<{ serviceProviderId: number }>()
);
export const deleteServiceProviderSuccessAction = createAction(
  '[Service Providers List Page] Delete service provider success'
);
export const deleteServiceProviderFailureAction = createAction(
  '[Service Providers List Page] Delete service provider failure',
  props<{ error: any }>()
);
