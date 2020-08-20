import { JwtHelperService } from '@auth0/angular-jwt';
import { createReducer, on } from '@ngrx/store';
import { getString, hasKey, setString } from 'tns-core-modules/application-settings';
import * as AuthActions from '../actions/auth.actions';
import { UserState } from '../state/user.state';

const tokenKey = 'token';

const initializeUserState = (): UserState => {
  console.log('Initialize auth');
  if (hasKey(tokenKey)) {
    const token = getString(tokenKey);
    console.log(`Init token: ${{ token }}`);
    if (token && token.length > 0) {
      const tokenDetails = new JwtHelperService().decodeToken(token);
      console.log(tokenDetails);
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
    console.log(getString(tokenKey));
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
  on(AuthActions.logoutAction, (state) => ({ ...state, auth: initialAuthState }))
);
