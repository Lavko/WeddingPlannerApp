import { createAction, props } from '@ngrx/store';

export const enableLoader = createAction('[Shared] Enable loader', props<{ loaderName: string }>());
export const disableLoader = createAction('[Shared] Disable loader', props<{ loaderName: string }>());
