/* tslint:disable */
import { EventDto } from './event-dto';
export interface CalendarSummaryDto {
  eventsCount: number;
  eventsForNextDays?: Array<EventDto>;
  eventsInFutureCount: number;
}
