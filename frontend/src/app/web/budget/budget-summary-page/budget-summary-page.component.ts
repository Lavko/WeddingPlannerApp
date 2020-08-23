import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BudgetDto } from 'src/app/core/api/models';
import { getBudgetSummaryAction } from 'src/app/core/store/actions/budget.actions';
import { getServiceProvidersAction } from 'src/app/core/store/actions/serviceProviders.actions';
import { AppState } from 'src/app/core/store/state/app.state';
import { budgetSelectors } from 'src/app/core/store/state/budget.state';

@Component({
  selector: 'app-budget-summary-page',
  templateUrl: './budget-summary-page.component.html',
  styleUrls: ['./budget-summary-page.component.scss'],
})
export class BudgetSummaryPageComponent implements OnInit {
  public budget: Observable<BudgetDto>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(getBudgetSummaryAction());
    this.store.dispatch(getServiceProvidersAction());
    this.budget = budgetSelectors.getBudgetSummary(this.store);
  }
}
