import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetSummaryPageComponent } from './budget-summary-page/budget-summary-page.component';

const routes: Routes = [
  {
    path: '',
    component: BudgetSummaryPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetRoutingModule {}
