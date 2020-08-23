import { Store } from '@ngrx/store';
import { BudgetSummaryDto } from 'src/app/core/api/models/budget-summary-dto';
import { CalendarSummaryDto } from 'src/app/core/api/models/calendar-summary-dto';
import { GuestSummaryDto } from 'src/app/core/api/models/guest-summary-dto';
import { AppState } from 'src/app/core/store/state/app.state';

export interface SummaryState {
  userName: string;
  partnerName: string;
  ceremonyPlace: string;
  ceremonyDate: string;
  weddingPlace: string;
  weddingDate: string;
  guestsSummary: GuestSummaryDto;
  budgetSummary: BudgetSummaryDto;
  calendarSummary: CalendarSummaryDto;
  isWeddingDetailsSaved: boolean;
}

const getUserName = (store: Store<AppState>) => store.select((state) => state.summary.userName);
const getPartnerName = (store: Store<AppState>) => store.select((state) => state.summary.partnerName);
const getCeremonyPlace = (store: Store<AppState>) => store.select((state) => state.summary.ceremonyPlace);
const getCeremonyDate = (store: Store<AppState>) => store.select((state) => state.summary.ceremonyDate);
const getWeddingPlace = (store: Store<AppState>) => store.select((state) => state.summary.weddingPlace);
const getWeddingDate = (store: Store<AppState>) => store.select((state) => state.summary.weddingDate);
const getGuestSummary = (store: Store<AppState>) => store.select((state) => state.summary.guestsSummary);
const getBudgetSummary = (store: Store<AppState>) => store.select((state) => state.summary.budgetSummary);
const getCalendarSummary = (store: Store<AppState>) => store.select((state) => state.summary.calendarSummary);
const isWeddingDetailsSaved = (store: Store<AppState>) => store.select((state) => state.summary.isWeddingDetailsSaved);

export const summarySelectors = {
  getUserName,
  getPartnerName,
  getCeremonyPlace,
  getCeremonyDate,
  getWeddingPlace,
  getWeddingDate,
  getGuestSummary,
  getBudgetSummary,
  getCalendarSummary,
  isWeddingDetailsSaved,
};
