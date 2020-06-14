/* tslint:disable */
import { ExpenseStatus } from './expense-status';
export interface CreateExpenseDto {
  adnotation?: string;
  amount: number;
  deposit: number;
  expenseStatus: ExpenseStatus;
  name: string;
  plannerId: number;
  serviceProviderId?: number;
}
