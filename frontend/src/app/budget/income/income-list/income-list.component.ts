import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BudgetModel } from 'src/app/api/models';
import { IncomeDto } from 'src/app/api/models/income-dto';
import { AppState } from 'src/app/store/state/app.state';
import { budgetSelectors } from 'src/app/store/state/budget.state';
import { AddIncomeDialogComponent } from '../add-income-dialog/add-income-dialog.component';
import { EditIncomeDialogComponent } from '../edit-income-dialog/edit-income-dialog.component';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss'],
})
export class IncomeListComponent implements OnInit, OnDestroy {
  public budget$: Observable<BudgetModel>;
  public totalAmount: number;

  public displayedColumns: string[] = ['source', 'amount'];
  public dataSource: MatTableDataSource<IncomeDto>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public dialog: MatDialog, private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.budget$ = budgetSelectors.getBudgetSummary(this.store).pipe(
      tap((budget) => {
        if (budget) {
          this.dataSource = new MatTableDataSource(budget.incomes);
          this.totalAmount = this.getTotalAmount(budget.incomes);
        }
      })
    );
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public openCreateDialog(): void {
    const dialogRef = this.dialog.open(AddIncomeDialogComponent, {
      width: '650px',
    });
  }

  public openEditDialog(income: IncomeDto): void {
    const dialogRef = this.dialog.open(EditIncomeDialogComponent, {
      width: '650px',
      data: income,
    });
  }

  public getTotalAmount(incomes: IncomeDto[]): number {
    return incomes.map((t) => t.amount).reduce((acc, value) => acc + value, 0);
  }

  public ngOnDestroy(): void {}
}
