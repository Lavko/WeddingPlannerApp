/* tslint:disable */
import { ExpenseDto } from './expense-dto';
import { IncomeDto } from './income-dto';
export interface BudgetDto {
  expenses?: Array<ExpenseDto>;
  incomes?: Array<IncomeDto>;
}
