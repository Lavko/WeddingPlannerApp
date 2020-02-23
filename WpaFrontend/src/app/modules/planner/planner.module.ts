import { NgModule } from '@angular/core';
import { PlannerRoutingModule } from './planner-routing.module';
import { PlannerSummaryComponent } from './planner-summary/planner-summary.component';
import { PlannerComponent } from './planner.component';

@NgModule({
  declarations: [PlannerComponent, PlannerSummaryComponent],
  imports: [PlannerRoutingModule]
})
export class PlannerModule {}
