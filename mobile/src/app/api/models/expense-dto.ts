/* tslint:disable */
import { ExpenseStatus } from './expense-status';
import { ServiceProvider } from './service-provider';
export interface ExpenseDto {
  adnotation?: string;
  amount: number;
  deposit: number;
  expenseStatus: ExpenseStatus;
  id: number;
  name: string;
  plannerId: number;
  provider: string;
  serviceProvider?: ServiceProvider;
}
