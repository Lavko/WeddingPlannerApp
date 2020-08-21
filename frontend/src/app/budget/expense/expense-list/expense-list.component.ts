import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ExpenseDto } from 'src/app/api/models';
import { BudgetDto } from 'src/app/api/models/budget-dto';
import { AppState } from 'src/app/store/state/app.state';
import { budgetSelectors } from 'src/app/store/state/budget.state';
import { AddExpenseDialogComponent } from './../add-expense-dialog/add-expense-dialog.component';
import { EditExpenseDialogComponent } from './../edit-expense-dialog/edit-expense-dialog.component';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
})
export class ExpenseListComponent implements OnInit, OnDestroy {
  public budget$: Observable<BudgetDto>;
  public totalAmount: number;

  public displayedColumns: string[] = ['name', 'amount'];
  public dataSource: MatTableDataSource<ExpenseDto>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public dialog: MatDialog, private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.budget$ = budgetSelectors.getBudgetSummary(this.store).pipe(
      tap((budget) => {
        if (budget) {
          this.dataSource = new MatTableDataSource(budget.expenses);
          this.totalAmount = this.getTotalAmount(budget.expenses);
        }
      })
    );
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public openCreateDialog(): void {
    const dialogRef = this.dialog.open(AddExpenseDialogComponent, {
      width: '650px',
    });
  }

  public openEditDialog(income: ExpenseDto): void {
    const dialogRef = this.dialog.open(EditExpenseDialogComponent, {
      width: '650px',
      data: income,
    });
  }

  public getTotalAmount(expenses: ExpenseDto[]): number {
    return expenses.map((t) => t.amount).reduce((acc, value) => acc + value, 0);
  }

  public ngOnDestroy(): void {}
}
