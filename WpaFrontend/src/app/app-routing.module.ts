import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'planner', pathMatch: 'full' },
  { 
    path: 'planner', 
    loadChildren: './modules/planner/planner.module#PlannerModule'
  },
  {
    path: 'guests',
    loadChildren: './modules/guests/guests.module#GuestsModule'
  }
  { 
    path: 'auth', 
    loadChildren: './modules/auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
