import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth-guard';
import { GuestsListComponent } from './guests-list/guests-list.component';
import { GuestsComponent } from './guests.component';

const routes: Routes = [
  {
    path: '',
    component: GuestsComponent,
    canActivate: [AuthGuard],
    children: [{ path: '', component: GuestsListComponent, canActivate: [AuthGuard] }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestsRoutingModule {}
