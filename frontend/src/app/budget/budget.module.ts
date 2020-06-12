import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetSummaryPageComponent } from './budget-summary-page/budget-summary-page.component';
import { BudgetComponent } from './budget.component';
import { AddExpenseDialogComponent } from './expense/add-expense-dialog/add-expense-dialog.component';
import { EditExpenseDialogComponent } from './expense/edit-expense-dialog/edit-expense-dialog.component';
import { ExpenseFormComponent } from './expense/expense-form/expense-form.component';
import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
import { AddIncomeDialogComponent } from './income/add-income-dialog/add-income-dialog.component';
import { EditIncomeDialogComponent } from './income/edit-income-dialog/edit-income-dialog.component';
import { IncomeFormComponent } from './income/income-form/income-form.component';
import { IncomeListComponent } from './income/income-list/income-list.component';

@NgModule({
  declarations: [
    BudgetComponent,
    ExpenseFormComponent,
    BudgetSummaryPageComponent,
    AddExpenseDialogComponent,
    EditExpenseDialogComponent,
    IncomeFormComponent,
    AddIncomeDialogComponent,
    EditIncomeDialogComponent,
    IncomeListComponent,
    ExpenseListComponent,
  ],
  imports: [CommonModule, SharedModule, BudgetRoutingModule],
  entryComponents: [
    AddExpenseDialogComponent,
    EditExpenseDialogComponent,
    AddIncomeDialogComponent,
    EditIncomeDialogComponent,
  ],
})
export class BudgetModule {}
