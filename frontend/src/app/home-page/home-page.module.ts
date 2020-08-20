import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { CalendarSummaryComponent } from './calendar-summary/calendar-summary.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { GuestsSummaryComponent } from './guests-summary/guests-summary.component';
import { BudgetSummaryComponent } from './budget-summary/budget-summary.component';

@NgModule({
  declarations: [HomePageComponent, CalendarSummaryComponent, GuestsSummaryComponent, BudgetSummaryComponent],
  imports: [CommonModule, SharedModule, HomePageRoutingModule],
})
export class HomePageModule {}
