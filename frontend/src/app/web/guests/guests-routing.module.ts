import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestsListPageComponent } from './guests-list-page/guests-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: GuestsListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestsRoutingModule {}
