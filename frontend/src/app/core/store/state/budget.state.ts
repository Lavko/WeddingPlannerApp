import { BudgetDto, ExpenseDto } from '@core/api/models';
import { IncomeDto } from '@core/api/models/income-dto';
import { AppState } from '@core/store/state/app.state';
import { Store } from '@ngrx/store';

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
