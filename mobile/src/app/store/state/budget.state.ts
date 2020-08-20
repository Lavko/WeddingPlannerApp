import { Store } from '@ngrx/store';
import { BudgetModel, ExpenseDto } from '~/app/api/models';
import { IncomeDto } from '~/app/api/models/income-dto';
import { AppState } from '~/app/store/state/app.state';

export interface BudgetState {
  budgetSummary: BudgetModel;
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
