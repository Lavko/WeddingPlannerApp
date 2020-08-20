/* tslint:disable */
import { BudgetSummaryDto } from './budget-summary-dto';
import { CalendarSummaryDto } from './calendar-summary-dto';
import { GuestSummaryDto } from './guest-summary-dto';
export interface HomeSummaryDto {
  budgetSummary?: BudgetSummaryDto;
  calendarSummary?: CalendarSummaryDto;
  ceremonyDate: string;
  ceremonyPlace?: string;
  guestSummary?: GuestSummaryDto;
  weddingDate: string;
  weddingPlace?: string;
}
