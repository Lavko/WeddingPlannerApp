import { createAction, props } from '@ngrx/store';
import { GuestDto } from 'src/app/api/models';

export const getGuestsAction = createAction('[Guests List Page] Get guests');
export const getGuestsSuccessAction = createAction(
  '[Guests List Page] Get guests success',
  props<{ guests: GuestDto[] }>()
);
export const getGuestsFailureAction = createAction('[Guests List Page] Get guests failure', props<{ error: any }>());
