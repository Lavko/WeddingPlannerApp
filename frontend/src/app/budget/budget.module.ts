import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetComponent } from './budget.component';
import { BudgetSummaryComponent } from './budget-summary/budget-summary.component';
import { ExpenseFormComponent } from './expense/expense-form/expense-form.component';
import { BudgetSummaryPageComponent } from './budget-summary-page/budget-summary-page.component';
import { AddExpenseDialogComponent } from './expense/add-expense-dialog/add-expense-dialog.component';
import { EditExpenseDialogComponent } from './expense/edit-expense-dialog/edit-expense-dialog.component';
import { IncomeFormComponent } from './income/income-form/income-form.component';
import { AddIncomeDialogComponent } from './income/add-income-dialog/add-income-dialog.component';
import { EditIncomeDialogComponent } from './income/edit-income-dialog/edit-income-dialog.component';



@NgModule({
  declarations: [BudgetComponent, BudgetSummaryComponent, ExpenseFormComponent, BudgetSummaryPageComponent, AddExpenseDialogComponent, EditExpenseDialogComponent, IncomeFormComponent, AddIncomeDialogComponent, EditIncomeDialogComponent],
  imports: [
    CommonModule
  ]
})
export class BudgetModule { }
