/* tslint:disable */
import { EventColor } from './event-color';
export interface CreateEventDto {
  color: EventColor;
  date: string;
  plannerId: number;
  title?: string;
}
