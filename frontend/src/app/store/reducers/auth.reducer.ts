import { JwtHelperService } from '@auth0/angular-jwt';
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { AuthState } from './../state/auth.state';

export const initialAuthState: AuthState = { token: '' } as AuthState;

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.loginAction, (state) => ({ ...state })),
  on(AuthActions.loginSuccessAction, (state, props) => {
    const tokenDetails = new JwtHelperService().decodeToken(props.token);
    return {
      ...state,
      token: props.token,
      plannerId: tokenDetails.PlannerId,
    };
  }),
  on(AuthActions.registerAction, (state) => ({ ...state })),
  on(AuthActions.logoutAction, (state) => ({ ...state, auth: initialAuthState }))
);
