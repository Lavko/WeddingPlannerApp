import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthGuard } from '@core/auth/guards/auth-guard';
import { NativeScriptRouterModule } from '@nativescript/angular';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./mobile/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'guests',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./mobile/guests/guests.module').then((m) => m.GuestsModule),
  },
  {
    path: 'calendar',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./mobile/calendar/calendar.module').then((m) => m.CalendarModule),
  },
  {
    path: 'budget',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./mobile/budget/budget.module').then((m) => m.BudgetModule),
  },
  {
    path: 'providers',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./mobile/providers/providers.module').then((m) => m.ProvidersModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./mobile/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
