import { Component, Input, OnInit } from '@angular/core';
import { BudgetModel } from 'src/app/api/models';

@Component({
  selector: 'app-budget-summary-panel',
  templateUrl: './budget-summary-panel.component.html',
  styleUrls: ['./budget-summary-panel.component.scss'],
})
export class BudgetSummaryPanelComponent implements OnInit {
  @Input() public budget: BudgetModel;

  public allIncomes: number;
  public allExpenses: number;
  public balance: number;

  public estimated: number;
  public signed: number;
  public prepaid: number;
  public paid: number;

  constructor() {}

  ngOnInit() {
    this.allIncomes = this.sum(this.budget.incomes);
    this.allExpenses = this.sum(this.budget.expenses);
    this.balance = this.allIncomes - this.allExpenses;

    this.estimated = this.sumByExpenseType(1);
    this.signed = this.sumByExpenseType(2);
    this.prepaid = this.sumByExpenseType(3);
    this.paid = this.sumByExpenseType(4);
  }

  private sum(amounts: any[]): number {
    return amounts.map((t) => t.amount).reduce((acc, value) => acc + value, 0);
  }

  private sumByExpenseType(expenseType: number): number {
    return this.sum(this.budget.expenses.filter((e) => e.expenseStatus === expenseType));
  }
}
