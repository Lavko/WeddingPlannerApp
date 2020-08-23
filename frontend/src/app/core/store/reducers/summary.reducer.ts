import { createReducer, on } from '@ngrx/store';
import * as SummaryActions from './../actions/summaryActions';
import { SummaryState } from './../state/summary.state';

const isWeddingDetailsSavedKey = 'isWeddingDetailsSaved';

const checkWeddingDetailsFromCookies = (): boolean => {
  const isWeddingDetailsSaved = localStorage.getItem(isWeddingDetailsSavedKey);
  if (isWeddingDetailsSaved) {
    return JSON.parse(isWeddingDetailsSaved);
  }
  return false;
};

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
