import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { BudgetSummaryDto } from '../../api/models/budget-summary-dto';
import { CalendarSummaryDto } from '../../api/models/calendar-summary-dto';
import { GuestSummaryDto } from '../../api/models/guest-summary-dto';

export interface SummaryState {
  ceremonyPlace: string;
  ceremonyDate: string;
  weddingPlace: string;
  weddingDate: string;
  guestsSummary: GuestSummaryDto;
  budgetSummary: BudgetSummaryDto;
  calendarSummary: CalendarSummaryDto;
}

const getCeremonyPlace = (store: Store<AppState>) => store.select((state) => state.summary.ceremonyPlace);
const getCeremonyDate = (store: Store<AppState>) => store.select((state) => state.summary.ceremonyDate);
const getWeddingPlace = (store: Store<AppState>) => store.select((state) => state.summary.weddingPlace);
const getWeddingDate = (store: Store<AppState>) => store.select((state) => state.summary.weddingDate);
const getGuestSummary = (store: Store<AppState>) => store.select((state) => state.summary.guestsSummary);
const getBudgetSummary = (store: Store<AppState>) => store.select((state) => state.summary.budgetSummary);
const getCalendarSummary = (store: Store<AppState>) => store.select((state) => state.summary.calendarSummary);

export const summarySelectors = {
  getCeremonyPlace,
  getCeremonyDate,
  getWeddingPlace,
  getWeddingDate,
  getGuestSummary,
  getBudgetSummary,
  getCalendarSummary,
};
