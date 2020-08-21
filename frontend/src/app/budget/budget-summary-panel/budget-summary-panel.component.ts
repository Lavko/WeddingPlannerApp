import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BudgetDto } from 'src/app/api/models';
import { AppState } from 'src/app/store/state/app.state';
import { budgetSelectors } from 'src/app/store/state/budget.state';

@Component({
  selector: 'app-budget-summary-panel',
  templateUrl: './budget-summary-panel.component.html',
  styleUrls: ['./budget-summary-panel.component.scss'],
})
export class BudgetSummaryPanelComponent implements OnInit {
  public budget$: Observable<BudgetDto>;

  public allIncomes: number;
  public allExpenses: number;
  public balance: number;

  public estimated: number;
  public signed: number;
  public prepaid: number;
  public paid: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.budget$ = budgetSelectors.getBudgetSummary(this.store).pipe(
      tap((budget) => {
        if (budget) {
          this.allIncomes = this.sum(budget.incomes);
          this.allExpenses = this.sum(budget.expenses);
          this.balance = this.allIncomes - this.allExpenses;

          this.estimated = this.sumByExpenseType(1, budget);
          this.signed = this.sumByExpenseType(2, budget);
          this.prepaid = this.sumByExpenseType(3, budget);
          this.paid = this.sumByExpenseType(4, budget);
        }
      })
    );
  }

  private sum(amounts: any[]): number {
    return amounts.map((t) => t.amount).reduce((acc, value) => acc + value, 0);
  }

  private sumByExpenseType(expenseType: number, budget: BudgetDto): number {
    return this.sum(budget.expenses.filter((e) => e.expenseStatus === expenseType));
  }
}
