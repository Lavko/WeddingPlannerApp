/* tslint:disable */
import { EventColor } from './event-color';
export interface EventDto {
  color: EventColor;
  date: string;
  id: number;
  plannerId: number;
  title?: string;
}
