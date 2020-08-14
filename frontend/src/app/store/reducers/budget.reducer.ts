import { createReducer, on } from '@ngrx/store';
import * as BudgetActions from '../actions/budget.actions';
import { BudgetState } from './../state/budget.state';

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
