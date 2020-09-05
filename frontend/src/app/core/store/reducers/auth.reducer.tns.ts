import { JwtHelperService } from '@auth0/angular-jwt';
import * as AuthActions from '@core/store/actions/auth.actions';
import { UserState } from '@core/store/state/user.state';
import { getString, remove, setString } from '@nativescript/core/application-settings';
import { createReducer, on } from '@ngrx/store';

const tokenKey = 'token';

const initializeUserState = (): UserState => {
  const token = getString(tokenKey);
  if (token && token.length > 0) {
    const tokenDetails = new JwtHelperService().decodeToken(token);
    if (tokenDetails) {
      return {
        token,
        userId: tokenDetails.nameid,
        email: tokenDetails.email,
        firstName: tokenDetails.unique_name,
        plannerId: tokenDetails.plannerId,
      };
    }
  }
  return {
    token: null,
    userId: null,
    email: null,
    firstName: null,
    plannerId: null,
  };
};

export const initialAuthState: UserState = initializeUserState();

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.loginSuccessAction, (state, props) => {
    setString(tokenKey, props.token);
    const tokenDetails = new JwtHelperService().decodeToken(props.token);
    return {
      ...state,
      token: props.token,
      userId: tokenDetails.nameid,
      email: tokenDetails.email,
      firstName: tokenDetails.unique_name,
      plannerId: tokenDetails.plannerId,
    };
  }),
  on(AuthActions.logoutAction, (state) => {
    remove(tokenKey);
    return { ...state, auth: initialAuthState };
  })
);
