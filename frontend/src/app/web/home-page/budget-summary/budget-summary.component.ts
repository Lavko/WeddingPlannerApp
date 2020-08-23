import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BudgetSummaryDto } from 'src/app/core/api/models/budget-summary-dto';
import { AppState } from 'src/app/core/store/state/app.state';
import { summarySelectors } from 'src/app/core/store/state/summary.state';

@Component({
  selector: 'app-budget-summary',
  templateUrl: './budget-summary.component.html',
  styleUrls: ['./budget-summary.component.scss'],
})
export class BudgetSummaryComponent implements OnInit {
  public budgetSummary$: Observable<BudgetSummaryDto>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.budgetSummary$ = summarySelectors.getBudgetSummary(this.store);
  }
}
