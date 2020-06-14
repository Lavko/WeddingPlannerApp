import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { IncomeDto } from 'src/app/api/models';
import { BudgetService } from 'src/app/api/services';
import { AddIncomeDialogComponent } from '../add-income-dialog/add-income-dialog.component';
import { EditIncomeDialogComponent } from '../edit-income-dialog/edit-income-dialog.component';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss'],
})
export class IncomeListComponent implements OnInit, OnDestroy {
  @Input() public incomes!: IncomeDto[];
  @Output() public listChanged = new EventEmitter<boolean>();

  public displayedColumns: string[] = ['source', 'amount'];
  public dataSource: MatTableDataSource<IncomeDto>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private budgetService: BudgetService, public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.incomes);
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public openCreateDialog(): void {
    const dialogRef = this.dialog.open(AddIncomeDialogComponent, {
      width: '650px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.budgetService
          .BudgetCreateIncome(result)
          .pipe(untilDestroyed(this))
          .subscribe(() => {
            this.listChanged.emit(true);
          });
      }
    });
  }

  public openEditDialog(income: IncomeDto): void {
    const dialogRef = this.dialog.open(EditIncomeDialogComponent, {
      width: '650px',
      data: income,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result === 'remove') {
          this.budgetService
            .BudgetDeleteIncome(income.id)
            .pipe(untilDestroyed(this))
            .subscribe(() => {
              this.listChanged.emit(true);
            });
        } else {
          this.budgetService
            .BudgetUpdateIncome(result)
            .pipe(untilDestroyed(this))
            .subscribe(() => {
              this.listChanged.emit(true);
            });
        }
      }
    });
  }

  public getTotalAmount(): number {
    return this.incomes.map((t) => t.amount).reduce((acc, value) => acc + value, 0);
  }

  public ngOnDestroy(): void {}
}
