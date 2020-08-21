import { createReducer, on } from '@ngrx/store';
import * as SummaryActions from './../actions/summaryActions';
import { SummaryState } from './../state/summary.state';

export const initialSummaryState: SummaryState = {
  partnerName: '',
  ceremonyPlace: '',
  ceremonyDate: null,
  weddingPlace: '',
  weddingDate: null,
  guestsSummary: null,
  budgetSummary: null,
  calendarSummary: null,
};

export const summaryReducer = createReducer(
  initialSummaryState,
  on(SummaryActions.getSummarySuccessAction, (state, props) => ({
    ...state,
    partnerName: props.summary.partnerName,
    ceremonyPlace: props.summary.ceremonyPlace,
    ceremonyDate: props.summary.ceremonyDate,
    weddingPlace: props.summary.weddingPlace,
    weddingDate: props.summary.weddingDate,
    guestsSummary: props.summary.guestSummary,
    budgetSummary: props.summary.budgetSummary,
    calendarSummary: props.summary.calendarSummary,
  }))
);
