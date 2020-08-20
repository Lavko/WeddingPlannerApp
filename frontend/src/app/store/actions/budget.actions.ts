import { createAction, props } from '@ngrx/store';
import { BudgetModel } from 'src/app/api/models';
import { CreateExpenseDto } from 'src/app/api/models/create-expense-dto';
import { CreateIncomeDto } from 'src/app/api/models/create-income-dto';
import { UpdateExpenseDto } from 'src/app/api/models/update-expense-dto';
import { UpdateIncomeDto } from 'src/app/api/models/update-income-dto';

export const getBudgetSummaryAction = createAction('[Budget Page] Get budget summary');
export const getBudgetSummarySuccessAction = createAction(
  '[Budget Page] Get budget summary success',
  props<{ budgetSummary: BudgetModel }>()
);
export const getBudgetSummaryFailureAction = createAction(
  '[Budget Page] Get budget summary failure',
  props<{ error: any }>()
);

export const saveNewExpenseAction = createAction(
  '[Add Expense Dialog] Save new expense',
  props<{ expenseDto: CreateExpenseDto }>()
);
export const saveNewExpenseSuccessAction = createAction('[Add Expense Dialog] Save new expense success');
export const saveNewExpenseFailureAction = createAction(
  '[Add Expense Dialog] Save new expense failure',
  props<{ error: any }>()
);

export const saveEditedExpenseAction = createAction(
  '[Edit Expense Dialog] Save edited expense',
  props<{ expenseDto: UpdateExpenseDto }>()
);
export const saveEditedExpenseSuccessAction = createAction('[Edit Expense Dialog] Save edited expense success');
export const saveEditedExpenseFailureAction = createAction(
  '[Edit Expense Dialog] Save edited expense failure',
  props<{ error: any }>()
);

export const deleteExpenseAction = createAction('[Edit Expense Dialog] Delete expense', props<{ expenseId: number }>());
export const deleteExpenseSuccessAction = createAction('[Edit Expense Dialog] Delete expense success');
export const deleteExpenseFailureAction = createAction(
  '[Edit Expense Dialog] Delete expense failure',
  props<{ error: any }>()
);

export const saveNewIncomeAction = createAction(
  '[Add Income Dialog] Save new income',
  props<{ incomeDto: CreateIncomeDto }>()
);
export const saveNewIncomeSuccessAction = createAction('[Add Income Dialog] Save new income success');
export const saveNewIncomeFailureAction = createAction(
  '[Add Income Dialog] Save new income failure',
  props<{ error: any }>()
);

export const saveEditedIncomeAction = createAction(
  '[Edit Income Dialog] Save edited income',
  props<{ incomeDto: UpdateIncomeDto }>()
);
export const saveEditedIncomeSuccessAction = createAction('[Edit Income Dialog] Save edited income success');
export const saveEditedIncomeFailureAction = createAction(
  '[Edit Income Dialog] Save edited income failure',
  props<{ error: any }>()
);

export const deleteIncomeAction = createAction('[Edit Income Dialog] Delete income', props<{ incomeId: number }>());
export const deleteIncomeSuccessAction = createAction('[Edit Income Dialog] Delete income success');
export const deleteIncomeFailureAction = createAction(
  '[Edit Income Dialog] Delete income failure',
  props<{ error: any }>()
);
