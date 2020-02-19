import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth-guard';
import { PlannerSummaryComponent } from './planner-summary/planner-summary.component';
import { PlannerComponent } from './planner.component';

const routes: Routes = [
  {
    path: '',
    component: PlannerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: PlannerSummaryComponent, canActivate: [AuthGuard] }
      //{ path: 'new', component: NewPlannerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlannerRoutingModule {}
