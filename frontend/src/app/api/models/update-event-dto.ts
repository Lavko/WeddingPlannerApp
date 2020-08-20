/* tslint:disable */
import { EventColor } from './event-color';
export interface UpdateEventDto {
  color: EventColor;
  date: string;
  id: number;
  plannerId: number;
  title?: string;
}
