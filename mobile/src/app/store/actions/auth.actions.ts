import { createAction, props } from '@ngrx/store';
import { LoginUserDto } from '~/app/api/models';

export const loginAction = createAction('[Login Page] Login', props<LoginUserDto>());
export const loginSuccessAction = createAction('[Auth API] Login success', props<{ token: string }>());
export const loginFailureAction = createAction('[Auth API] Login failure', props<{ error: any }>());

export const registerAction = createAction(
  '[Register Page] Register',
  props<{ firstName: string; email: string; password: string }>()
);
export const registerSuccessAction = createAction('[Register Page] Register success');
export const registerFailureAction = createAction('[Register Page] Register failure', props<{ error: any }>());

export const logoutAction = createAction('[Logout Page] Logout');
