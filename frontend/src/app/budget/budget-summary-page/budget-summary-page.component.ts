import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BudgetModel } from 'src/app/api/models';
import { BudgetService } from 'src/app/api/services';

@Component({
  selector: 'app-budget-summary-page',
  templateUrl: './budget-summary-page.component.html',
  styleUrls: ['./budget-summary-page.component.scss'],
})
export class BudgetSummaryPageComponent implements OnInit {
  public budget: Observable<BudgetModel>;

  constructor(private budgetService: BudgetService) {}

  ngOnInit() {
    this.retrieveBudget();
  }

  public retrieveBudget(): void {
    this.budget = this.budgetService.BudgetGetSummary();
  }
}
