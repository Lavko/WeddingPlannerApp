/* tslint:disable */
import { ExpenseDto } from './expense-dto';
import { IncomeDto } from './income-dto';
export interface BudgetModel {
  expenses?: Array<ExpenseDto>;
  incomes?: Array<IncomeDto>;
}
