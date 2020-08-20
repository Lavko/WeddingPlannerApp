/* tslint:disable */
import { GuestSide } from './guest-side';
import { GuestStatus } from './guest-status';
export interface CreateGuestDto {
  adnotation?: string;
  isTravelling: boolean;
  name: string;
  plannerId: number;
  side: GuestSide;
  status: GuestStatus;
}
