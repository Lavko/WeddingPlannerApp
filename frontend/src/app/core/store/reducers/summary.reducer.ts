import * as SummaryActions from '@core/store/actions/summaryActions';
import { SummaryState } from '@core/store/state/summary.state';
import { createReducer, on } from '@ngrx/store';

export const initialSummaryState: SummaryState = {
  userName: '',
  partnerName: '',
  ceremonyPlace: '',
  ceremonyDate: null,
  weddingPlace: '',
  weddingDate: null,
  guestsSummary: null,
  budgetSummary: null,
  calendarSummary: null,
  isWeddingDetailsSaved: true,
};

export const summaryReducer = createReducer(
  initialSummaryState,
  on(SummaryActions.getSummarySuccessAction, (state, props) => ({
    ...state,
    userName: props.summary.userName,
    partnerName: props.summary.partnerName,
    ceremonyPlace: props.summary.ceremonyPlace,
    ceremonyDate: props.summary.ceremonyDate,
    weddingPlace: props.summary.weddingPlace,
    weddingDate: props.summary.weddingDate,
    isWeddingDetailsSaved: props.summary.isWeddingDetailsSaved,
    guestsSummary: props.summary.guestSummary,
    budgetSummary: props.summary.budgetSummary,
    calendarSummary: props.summary.calendarSummary,
  }))
);
