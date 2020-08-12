import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { LoginUserDto } from 'src/app/api/models';
import { UsersService } from 'src/app/api/services';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/auth.actions';
import { AppState } from '../state/app.state';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      exhaustMap((action) =>
        this.usersService.UsersAuthenticate(action as LoginUserDto).pipe(
          map((token) => loginSuccessAction({ token })),
          catchError((error) => of(loginFailureAction({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService, private store: Store<AppState>) {}
}
