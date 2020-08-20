/* tslint:disable */
import { GuestSide } from './guest-side';
import { GuestStatus } from './guest-status';
export interface Guest {
  adnotation?: string;
  id: number;
  isTravelling: boolean;
  name?: string;
  plannerId: number;
  side: GuestSide;
  status: GuestStatus;
}
