import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMapTo, map, mergeMap } from 'rxjs/operators';
import { BudgetService } from '~/app/api/services';
import {
  deleteExpenseAction,
  deleteExpenseFailureAction,
  deleteExpenseSuccessAction,
  deleteIncomeAction,
  deleteIncomeFailureAction,
  deleteIncomeSuccessAction,
  getBudgetSummaryAction,
  getBudgetSummaryFailureAction,
  getBudgetSummarySuccessAction,
  saveEditedExpenseAction,
  saveEditedExpenseFailureAction,
  saveEditedExpenseSuccessAction,
  saveEditedIncomeAction,
  saveEditedIncomeFailureAction,
  saveEditedIncomeSuccessAction,
  saveNewExpenseAction,
  saveNewExpenseFailureAction,
  saveNewExpenseSuccessAction,
  saveNewIncomeAction,
  saveNewIncomeFailureAction,
  saveNewIncomeSuccessAction,
} from './../actions/budget.actions';
import { AppState } from './../state/app.state';

@Injectable()
export class BudgetEffects {
  constructor(private actions$: Actions, private budgetService: BudgetService, private store: Store<AppState>) {}

  @Effect()
  budgetSummary$ = this.actions$.pipe(
    ofType(getBudgetSummaryAction),
    mergeMap(() => {
      return this.budgetService.BudgetGetSummary().pipe(
        map((budgetSummary) => getBudgetSummarySuccessAction({ budgetSummary })),
        catchError((error) => of(getBudgetSummaryFailureAction({ error })))
      );
    })
  );

  @Effect()
  saveIncome$ = this.actions$.pipe(
    ofType(saveNewIncomeAction),
    mergeMap((action) =>
      this.budgetService.BudgetCreateIncome(action.incomeDto).pipe(
        concatMapTo([saveNewIncomeSuccessAction(), getBudgetSummaryAction()]),
        catchError((error) => of(saveNewIncomeFailureAction({ error })))
      )
    )
  );

  @Effect()
  editIncome$ = this.actions$.pipe(
    ofType(saveEditedIncomeAction),
    mergeMap((action) =>
      this.budgetService.BudgetUpdateIncome(action.incomeDto).pipe(
        concatMapTo([saveEditedIncomeSuccessAction(), getBudgetSummaryAction()]),
        catchError((error) => of(saveEditedIncomeFailureAction({ error })))
      )
    )
  );

  @Effect()
  deleteIncome$ = this.actions$.pipe(
    ofType(deleteIncomeAction),
    mergeMap((action) =>
      this.budgetService.BudgetDeleteIncome(action.incomeId).pipe(
        concatMapTo([deleteIncomeSuccessAction(), getBudgetSummaryAction()]),
        catchError((error) => of(deleteIncomeFailureAction({ error })))
      )
    )
  );

  @Effect()
  saveExpense$ = this.actions$.pipe(
    ofType(saveNewExpenseAction),
    mergeMap((action) =>
      this.budgetService.BudgetCreateExpense(action.expenseDto).pipe(
        concatMapTo([saveNewExpenseSuccessAction(), getBudgetSummaryAction()]),
        catchError((error) => of(saveNewExpenseFailureAction({ error })))
      )
    )
  );

  @Effect()
  editExpense$ = this.actions$.pipe(
    ofType(saveEditedExpenseAction),
    mergeMap((action) =>
      this.budgetService.BudgetUpdateExpense(action.expenseDto).pipe(
        concatMapTo([saveEditedExpenseSuccessAction(), getBudgetSummaryAction()]),
        catchError((error) => of(saveEditedExpenseFailureAction({ error })))
      )
    )
  );

  @Effect()
  deleteExpense$ = this.actions$.pipe(
    ofType(deleteExpenseAction),
    mergeMap((action) =>
      this.budgetService.BudgetDeleteExpense(action.expenseId).pipe(
        concatMapTo([deleteExpenseSuccessAction(), getBudgetSummaryAction()]),
        catchError((error) => of(deleteExpenseFailureAction({ error })))
      )
    )
  );
}
