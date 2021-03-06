import { Store } from '@ngrx/store';
import { BudgetDto, ExpenseDto } from 'src/app/api/models';
import { IncomeDto } from 'src/app/api/models/income-dto';
import { AppState } from 'src/app/store/state/app.state';

export interface BudgetState {
  budgetSummary: BudgetDto;
  incomes: IncomeDto[];
  expenses: ExpenseDto[];
}

const getBudgetSummary = (store: Store<AppState>) => store.select((state) => state.budget.budgetSummary);
const getIncomes = (store: Store<AppState>) => store.select((state) => state.budget.incomes);
const getExpenses = (store: Store<AppState>) => store.select((state) => state.budget.expenses);

export const budgetSelectors = {
  getBudgetSummary,
  getIncomes,
  getExpenses,
};
