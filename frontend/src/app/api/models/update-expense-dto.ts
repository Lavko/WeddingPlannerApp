/* tslint:disable */
import { ExpenseStatus } from './expense-status';
export interface UpdateExpenseDto {
  adnotation?: string;
  amount: number;
  deposit: number;
  expenseStatus: ExpenseStatus;
  id: number;
  name: string;
  plannerId: number;
  provider: string;
  serviceProviderId?: number;
}
