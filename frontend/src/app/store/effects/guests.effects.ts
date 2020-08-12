import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, withLatestFrom } from 'rxjs/operators';
import { GuestService } from 'src/app/api/services';
import { getGuestsAction, getGuestsFailureAction, getGuestsSuccessAction } from './../actions/guests.actions';
import { AppState } from './../state/app.state';

@Injectable()
export class GuestsEffects {
  constructor(private actions$: Actions, private guestService: GuestService, private store: Store<AppState>) {}

  guestsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getGuestsAction),
      withLatestFrom(this.store.select((state) => state.auth.plannerId)),
      exhaustMap(([action, plannerId]) =>
        this.guestService.GuestGetAll(plannerId).pipe(
          map((guests) => getGuestsSuccessAction({ guests })),
          catchError((error) => of(getGuestsFailureAction({ error })))
        )
      )
    )
  );
}
