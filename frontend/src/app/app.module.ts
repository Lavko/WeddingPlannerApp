import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SharedModule } from './shared/shared.module';
import { AuthEffects } from './store/effects/auth.effects';
import { BudgetEffects } from './store/effects/budget.effects';
import { CalendarEffects } from './store/effects/calendar.effects';
import { GuestsEffects } from './store/effects/guests.effects';
import { ServiceProvidersEffects } from './store/effects/serviceProviders.effects';
import { SummaryEffects } from './store/effects/summary.effects';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [AppComponent, MainMenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      AuthEffects,
      GuestsEffects,
      BudgetEffects,
      ServiceProvidersEffects,
      CalendarEffects,
      SummaryEffects,
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
