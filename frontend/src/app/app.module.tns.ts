import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthEffects } from '@core/store/effects/auth.effects';
import { BudgetEffects } from '@core/store/effects/budget.effects';
import { CalendarEffects } from '@core/store/effects/calendar.effects';
import { GuestsEffects } from '@core/store/effects/guests.effects';
import { ServiceProvidersEffects } from '@core/store/effects/serviceProviders.effects';
import { SummaryEffects } from '@core/store/effects/summary.effects';
import { reducers } from '@core/store/reducers';
import { NativeScriptHttpClientModule, NativeScriptModule } from '@nativescript/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module.tns';
import { AppComponent } from './app.component.tns';
import { SharedModule } from './mobile/shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptHttpClientModule,
    AppRoutingModule,
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
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppMobileModule {}
