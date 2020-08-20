import { createAction, props } from '@ngrx/store';
import { HomeSummaryDto } from './../../api/models/home-summary-dto';

export const getSummaryAction = createAction('[Home Page] Get summary');
export const getSummarySuccessAction = createAction(
  '[Home Page] Get summary success',
  props<{ summary: HomeSummaryDto }>()
);
export const getSummaryFailureAction = createAction('[Home Page] Get summary failure', props<{ error: any }>());
