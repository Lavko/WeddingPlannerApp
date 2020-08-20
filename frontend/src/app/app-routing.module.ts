import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
    data: { animationState: 'auth' },
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: './home-page/home-page.module#HomePageModule',
    data: { animationState: 'home' },
  },
  {
    path: 'guests',
    canActivate: [AuthGuard],
    loadChildren: './guests/guests.module#GuestsModule',
    data: { animationState: 'guests' },
  },
  {
    path: 'serviceProviders',
    canActivate: [AuthGuard],
    loadChildren: './service-providers/service-providers.module#ServiceProvidersModule',
    data: { animationState: 'serviceProviders' },
  },
  {
    path: 'budget',
    canActivate: [AuthGuard],
    loadChildren: './budget/budget.module#BudgetModule',
    data: { animationState: 'budget' },
  },
  {
    path: 'events',
    canActivate: [AuthGuard],
    loadChildren: './events/events.module#EventsModule',
    data: { animationState: 'events' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
