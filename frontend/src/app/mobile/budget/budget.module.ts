import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetSummaryComponent } from './budget-summary/budget-summary.component';

@NgModule({
  declarations: [BudgetSummaryComponent],
  imports: [CommonModule, BudgetRoutingModule, SharedModule],
})
export class BudgetModule {}
