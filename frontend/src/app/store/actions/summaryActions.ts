import { createAction, props } from '@ngrx/store';
import { HomeSummaryDto } from './../../api/models/home-summary-dto';
import { UpdateWeddingDetailsDto } from './../../api/models/update-wedding-details-dto';

export const getSummaryAction = createAction('[Home Page] Get summary');
export const getSummarySuccessAction = createAction(
  '[Home Page] Get summary success',
  props<{ summary: HomeSummaryDto }>()
);
export const getSummaryFailureAction = createAction('[Home Page] Get summary failure', props<{ error: any }>());

export const saveWeddingDetailsAction = createAction(
  '[Home Page] Save wedding details',
  props<{ updateWeddingDetailsDto: UpdateWeddingDetailsDto }>()
);
export const saveWeddingDetailsSuccessAction = createAction('[Home Page] Save wedding details success');
export const saveWeddingDetailsFailureAction = createAction(
  '[Home Page] Save wedding details failure',
  props<{ error: any }>()
);
