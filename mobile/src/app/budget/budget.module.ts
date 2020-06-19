import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget.component';

@NgModule({
  declarations: [BudgetComponent],
  imports: [NativeScriptCommonModule, BudgetRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BudgetModule {}
