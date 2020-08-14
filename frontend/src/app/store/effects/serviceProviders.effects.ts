import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMapTo, map, mergeMap } from 'rxjs/operators';
import { ServiceProviderService } from 'src/app/api/services';
import {
  deleteServiceProviderAction,
  deleteServiceProviderFailureAction,
  deleteServiceProviderSuccessAction,
  getServiceProvidersAction,
  getServiceProvidersFailureAction,
  getServiceProvidersSuccessAction,
  saveEditedServiceProviderAction,
  saveEditedServiceProviderFailureAction,
  saveEditedServiceProviderSuccessAction,
  saveNewServiceProviderAction,
  saveNewServiceProviderFailureAction,
  saveNewServiceProviderSuccessAction,
} from './../actions/serviceProviders.actions';

@Injectable()
export class ServiceProvidersEffects {
  constructor(private actions$: Actions, private serviceProviderService: ServiceProviderService) {}

  @Effect()
  serviceProvidersList$ = this.actions$.pipe(
    ofType(getServiceProvidersAction),
    mergeMap((action) => {
      return this.serviceProviderService.ServiceProviderGetAll().pipe(
        map((serviceProviders) => getServiceProvidersSuccessAction({ serviceProviders })),
        catchError((error) => of(getServiceProvidersFailureAction({ error })))
      );
    })
  );

  @Effect()
  saveServiceProvider$ = this.actions$.pipe(
    ofType(saveNewServiceProviderAction),
    mergeMap((action) =>
      this.serviceProviderService.ServiceProviderPost(action.serviceProvider).pipe(
        concatMapTo([saveNewServiceProviderSuccessAction(), getServiceProvidersAction()]),
        catchError((error) => of(saveNewServiceProviderFailureAction({ error })))
      )
    )
  );

  @Effect()
  editServiceProvider$ = this.actions$.pipe(
    ofType(saveEditedServiceProviderAction),
    mergeMap((action) =>
      this.serviceProviderService.ServiceProviderPut(action.serviceProvider).pipe(
        concatMapTo([saveEditedServiceProviderSuccessAction(), getServiceProvidersAction()]),
        catchError((error) => of(saveEditedServiceProviderFailureAction({ error })))
      )
    )
  );

  @Effect()
  deleteServiceProvider$ = this.actions$.pipe(
    ofType(deleteServiceProviderAction),
    mergeMap((action) =>
      this.serviceProviderService.ServiceProviderDelete(action.serviceProviderId).pipe(
        concatMapTo([deleteServiceProviderSuccessAction(), getServiceProvidersAction()]),
        catchError((error) => of(deleteServiceProviderFailureAction({ error })))
      )
    )
  );
}
