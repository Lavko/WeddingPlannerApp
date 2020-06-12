/* tslint:disable */
import { ExpenseDto } from './expense-dto';
import { FundDto } from './fund-dto';
export interface BudgetModel {
  expenses?: Array<ExpenseDto>;
  funds?: Array<FundDto>;
}
