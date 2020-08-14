import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    redirectTo: 'guests',
    pathMatch: 'full',
    // loadChildren: '/home-page/home-page.module#HomePageModule',
  },

  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path: 'guests',
    canActivate: [AuthGuard],
    loadChildren: './guests/guests.module#GuestsModule',
  },
  {
    path: 'serviceProviders',
    canActivate: [AuthGuard],
    loadChildren: './service-providers/service-providers.module#ServiceProvidersModule',
  },
  {
    path: 'budget',
    canActivate: [AuthGuard],
    loadChildren: './budget/budget.module#BudgetModule',
  },
  {
    path: 'events',
    canActivate: [AuthGuard],
    loadChildren: './events/events.module#EventsModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
