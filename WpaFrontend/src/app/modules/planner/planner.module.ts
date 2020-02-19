import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlannerComponent } from './planner.component';
import { PlannerSummaryComponent } from './planner-summary/planner-summary.component';
import { PlannerRoutingModule } from './planner-routing.module';

@NgModule({
  declarations: [PlannerComponent, PlannerSummaryComponent],
  imports: [
    CommonModule,
    PlannerRoutingModule
  ]
})
export class PlannerModule { }
