import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'events',
    loadChildren: () => import('~/app/events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'guests',
    loadChildren: () => import('~/app/guests/guests.module').then((m) => m.GuestsModule),
  },
  {
    path: 'budget',
    loadChildren: () => import('~/app/budget/budget.module').then((m) => m.BudgetModule),
  },
  {
    path: 'service-providers',
    loadChildren: () =>
      import('~/app/service-providers/service-providers.module').then((m) => m.ServiceProvidersModule),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
