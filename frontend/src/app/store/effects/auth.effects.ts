import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMapTo, exhaustMap, map } from 'rxjs/operators';
import { LoginUserDto } from 'src/app/api/models';
import { RegisterUserDto } from 'src/app/api/models/register-user-dto';
import { UsersService } from 'src/app/api/services';
import { loginAction, loginFailureAction, loginSuccessAction, registerAction } from '../actions/auth.actions';
import { registerFailureAction, registerSuccessAction } from './../actions/auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      exhaustMap((action) =>
        this.usersService.UsersAuthenticate(action as LoginUserDto).pipe(
          map((token) => {
            this.router.navigate(['/home']);
            return loginSuccessAction({ token });
          }),
          catchError((error) => of(loginFailureAction({ error })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      exhaustMap((action) =>
        this.usersService.UsersRegister(action as RegisterUserDto).pipe(
          concatMapTo([registerSuccessAction(), loginAction(action as LoginUserDto)]),
          catchError((error) => of(registerFailureAction({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService, private router: Router) {}
}
