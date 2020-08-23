import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthEffects } from './../core/store/effects/auth.effects';
import { BudgetEffects } from './../core/store/effects/budget.effects';
import { CalendarEffects } from './../core/store/effects/calendar.effects';
import { GuestsEffects } from './../core/store/effects/guests.effects';
import { ServiceProvidersEffects } from './../core/store/effects/serviceProviders.effects';
import { SummaryEffects } from './../core/store/effects/summary.effects';
import { reducers } from './../core/store/reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, MainMenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
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
