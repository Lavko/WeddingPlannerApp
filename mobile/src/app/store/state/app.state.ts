import { BudgetState } from './budget.state';
import { GuestState } from './guests.state';
import { ServiceProvidersState } from './serviceProviders.state';
import { UserState } from './user.state';

export interface AppState {
  user: UserState;
  guests: GuestState;
  budget: BudgetState;
  serviceProviders: ServiceProvidersState;
}
