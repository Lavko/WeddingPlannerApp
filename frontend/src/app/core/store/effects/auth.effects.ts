import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserDto } from '@core/api/models';
import { RegisterUserDto } from '@core/api/models/register-user-dto';
import { UsersService } from '@core/api/services';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '@core/store/actions/auth.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMapTo, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  @Effect()
  loginEffect$ = this.actions$.pipe(
    ofType(loginAction),
    mergeMap((action) => {
      return this.usersService.UsersAuthenticate({ email: action.email, password: action.password }).pipe(
        map((token) => {
          this.router.navigate(['/home']);
          return loginSuccessAction({ token });
        }),
        catchError((error) => {
          console.log('error: ' + error);
          return of(loginFailureAction({ error }));
        })
      );
    })
  );

  @Effect()
  register$ = this.actions$.pipe(
    ofType(registerAction),
    mergeMap((action) =>
      this.usersService.UsersRegister(action as RegisterUserDto).pipe(
        concatMapTo([registerSuccessAction(), loginAction(action as LoginUserDto)]),
        catchError((error) => of(registerFailureAction({ error })))
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService, private router: Router) {}
}
