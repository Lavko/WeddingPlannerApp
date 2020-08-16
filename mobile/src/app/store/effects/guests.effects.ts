import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMapTo, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { GuestService } from '~/app/api/services';
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
} from './../actions/guests.actions';
import { AppState } from './../state/app.state';
import { userSelectors } from './../state/user.state';

@Injectable()
export class GuestsEffects {
  constructor(private actions$: Actions, private guestService: GuestService, private store: Store<AppState>) {}

  @Effect()
  guestsList$ = this.actions$.pipe(
    ofType(getGuestsAction),
    withLatestFrom(userSelectors.getPlannerId(this.store)),
    mergeMap(([action, plannerId]) => {
      console.log('PlannerId: ' + plannerId);
      return this.guestService.GuestGetAll(plannerId).pipe(
        map((guests) => getGuestsSuccessAction({ guests })),
        catchError((error) => of(getGuestsFailureAction({ error })))
      );
    })
  );

  @Effect()
  saveGuest$ = this.actions$.pipe(
    ofType(saveNewGuestAction),
    withLatestFrom(userSelectors.getPlannerId(this.store)),
    mergeMap(([action, plannerId]) =>
      this.guestService.GuestPost({ plannerId, createGuestDto: action.guest }).pipe(
        concatMapTo([saveNewGuestSuccessAction(), getGuestsAction()]),
        catchError((error) => of(saveNewGuestFailureAction({ error })))
      )
    )
  );

  @Effect()
  editGuest$ = this.actions$.pipe(
    ofType(saveEditedGuestAction),
    withLatestFrom(userSelectors.getPlannerId(this.store)),
    mergeMap(([action, plannerId]) =>
      this.guestService.GuestPut({ plannerId: plannerId.toString(), updateGuestDto: action.guest }).pipe(
        concatMapTo([saveEditedGuestSuccessAction(), getGuestsAction()]),
        catchError((error) => of(saveEditedGuestFailureAction({ error })))
      )
    )
  );

  @Effect()
  deleteGuest$ = this.actions$.pipe(
    ofType(deleteGuestAction),
    withLatestFrom(userSelectors.getPlannerId(this.store)),
    mergeMap(([action, plannerId]) =>
      this.guestService.GuestDelete({ plannerId: plannerId.toString(), id: action.guestId }).pipe(
        concatMapTo([deleteGuestSuccessAction(), getGuestsAction()]),
        catchError((error) => of(deleteGuestFailureAction({ error })))
      )
    )
  );
}
