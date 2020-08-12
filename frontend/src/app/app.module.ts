import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SharedModule } from './shared/shared.module';
import { AuthEffects } from './store/effects/auth.effects';
import { GuestsEffects } from './store/effects/guests.effects';
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
    EffectsModule.forRoot([AuthEffects, GuestsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
