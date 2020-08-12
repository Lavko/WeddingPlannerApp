import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AuthGuard } from './auth/guards/auth-guard';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'events',
    canActivate: [AuthGuard],
    loadChildren: () => import('~/app/events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'guests',
    canActivate: [AuthGuard],
    loadChildren: () => import('~/app/guests/guests.module').then((m) => m.GuestsModule),
  },
  {
    path: 'budget',
    canActivate: [AuthGuard],
    loadChildren: () => import('~/app/budget/budget.module').then((m) => m.BudgetModule),
  },
  {
    path: 'service-providers',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('~/app/service-providers/service-providers.module').then((m) => m.ServiceProvidersModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('~/app/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
