import * as BudgetActions from '@core/store/actions/budget.actions';
import { BudgetState } from '@core/store/state/budget.state';
import { createReducer, on } from '@ngrx/store';

export const initialBudgetState: BudgetState = {
  budgetSummary: null,
  incomes: [],
  expenses: [],
};

export const budgetReducer = createReducer(
  initialBudgetState,
  on(BudgetActions.getBudgetSummarySuccessAction, (state, props) => ({
    ...state,
    budgetSummary: props.budgetSummary,
  }))
);
