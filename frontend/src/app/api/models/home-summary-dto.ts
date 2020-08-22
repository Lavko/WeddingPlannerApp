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
  isWeddingDetailsSaved: boolean;
  partnerName?: string;
  userName?: string;
  weddingDate: string;
  weddingPlace?: string;
}
