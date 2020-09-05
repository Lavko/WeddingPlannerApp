import { Injectable } from '@angular/core';
import { GuestService } from '@core/api/services';
import {
  deleteGuestAction,
  deleteGuestFailureAction,
  deleteGuestSuccessAction,
  getGuestsAction,
  getGuestsFailureAction,
  getGuestsSuccessAction,
  saveEditedGuestAction,
  saveEditedGuestFailureAction,
  saveEditedGuestSuccessAction,
  saveNewGuestAction,
  saveNewGuestFailureAction,
  saveNewGuestSuccessAction,
} from '@core/store/actions/guests.actions';
import { AppState } from '@core/store/state/app.state';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMapTo, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class GuestsEffects {
  constructor(private actions$: Actions, private guestService: GuestService, private store: Store<AppState>) {}

  @Effect()
  guestsList$ = this.actions$.pipe(
    ofType(getGuestsAction),
    mergeMap(() => {
      return this.guestService.GuestGetAll().pipe(
        map((guests) => getGuestsSuccessAction({ guests })),
        catchError((error) => of(getGuestsFailureAction({ error })))
      );
    })
  );

  @Effect()
  saveGuest$ = this.actions$.pipe(
    ofType(saveNewGuestAction),
    mergeMap((action) =>
      this.guestService.GuestPost(action.guest).pipe(
        concatMapTo([saveNewGuestSuccessAction(), getGuestsAction()]),
        catchError((error) => of(saveNewGuestFailureAction({ error })))
      )
    )
  );

  @Effect()
  editGuest$ = this.actions$.pipe(
    ofType(saveEditedGuestAction),
    mergeMap((action) =>
      this.guestService.GuestPut(action.guest).pipe(
        concatMapTo([saveEditedGuestSuccessAction(), getGuestsAction()]),
        catchError((error) => of(saveEditedGuestFailureAction({ error })))
      )
    )
  );

  @Effect()
  deleteGuest$ = this.actions$.pipe(
    ofType(deleteGuestAction),
    mergeMap((action) =>
      this.guestService.GuestDelete(action.guestId).pipe(
        concatMapTo([deleteGuestSuccessAction(), getGuestsAction()]),
        catchError((error) => of(deleteGuestFailureAction({ error })))
      )
    )
  );
}
