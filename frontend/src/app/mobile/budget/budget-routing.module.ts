import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { BudgetSummaryComponent } from './budget-summary/budget-summary.component';

const routes: Routes = [{ path: '', component: BudgetSummaryComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class BudgetRoutingModule {}
