import { CreateGuestDto, GuestDto, UpdateGuestDto } from '@core/api/models';
import { createAction, props } from '@ngrx/store';

export const getGuestsAction = createAction('[Guests List Page] Get guests');
export const getGuestsSuccessAction = createAction(
  '[Guests List Page] Get guests success',
  props<{ guests: GuestDto[] }>()
);
export const getGuestsFailureAction = createAction('[Guests List Page] Get guests failure', props<{ error: any }>());

export const saveNewGuestAction = createAction('[Add Guest Dialog] Save new guest', props<{ guest: CreateGuestDto }>());
export const saveNewGuestSuccessAction = createAction('[Add Guest Dialog] Save new guest success');
export const saveNewGuestFailureAction = createAction(
  '[Add Guest Dialog] Save new guest failure',
  props<{ error: any }>()
);

export const saveEditedGuestAction = createAction(
  '[Edit Guest Dialog] Save edited guest',
  props<{ guest: UpdateGuestDto }>()
);
export const saveEditedGuestSuccessAction = createAction('[Edit Guest Dialog] Save edited guest success');
export const saveEditedGuestFailureAction = createAction(
  '[Edit Guest Dialog] Save edited guest failure',
  props<{ error: any }>()
);

export const deleteGuestAction = createAction('[Guests List Page] Delete guest', props<{ guestId: number }>());
export const deleteGuestSuccessAction = createAction('[Guests List Page] Delete guest success');
export const deleteGuestFailureAction = createAction(
  '[Guests List Page] Delete guest failure',
  props<{ error: any }>()
);
