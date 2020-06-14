import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ExpenseDto } from 'src/app/api/models';
import { BudgetService } from 'src/app/api/services';
import { AddExpenseDialogComponent } from './../add-expense-dialog/add-expense-dialog.component';
import { EditExpenseDialogComponent } from './../edit-expense-dialog/edit-expense-dialog.component';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
})
export class ExpenseListComponent implements OnInit, OnDestroy {
  @Input() public expenses: ExpenseDto[];
  @Output() public listChanged = new EventEmitter<boolean>();

  public displayedColumns: string[] = ['name', 'amount'];
  public dataSource: MatTableDataSource<ExpenseDto>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private budgetService: BudgetService, public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.expenses);
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public openCreateDialog(): void {
    const dialogRef = this.dialog.open(AddExpenseDialogComponent, {
      width: '650px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.budgetService
          .BudgetCreateExpense(result)
          .pipe(untilDestroyed(this))
          .subscribe(() => {
            this.listChanged.emit(true);
          });
      }
    });
  }

  public openEditDialog(income: ExpenseDto): void {
    const dialogRef = this.dialog.open(EditExpenseDialogComponent, {
      width: '650px',
      data: income,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result === 'remove') {
          this.budgetService
            .BudgetDeleteExpense(income.id)
            .pipe(untilDestroyed(this))
            .subscribe(() => {
              this.listChanged.emit(true);
            });
        } else {
          this.budgetService
            .BudgetUpdateExpense(result)
            .pipe(untilDestroyed(this))
            .subscribe(() => {
              this.listChanged.emit(true);
            });
        }
      }
    });
  }

  public getTotalAmount(): number {
    return this.expenses.map((t) => t.amount).reduce((acc, value) => acc + value, 0);
  }

  public ngOnDestroy(): void {}
}
