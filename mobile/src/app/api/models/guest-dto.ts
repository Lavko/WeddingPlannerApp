/* tslint:disable */
import { GuestSide } from './guest-side';
import { GuestStatus } from './guest-status';
export interface GuestDto {
  adnotation?: string;
  id: number;
  isTravelling: boolean;
  name: string;
  side: GuestSide;
  status: GuestStatus;
}
