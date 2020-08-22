import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { BudgetSummaryComponent } from './budget-summary/budget-summary.component';
import { CalendarSummaryComponent } from './calendar-summary/calendar-summary.component';
import { GuestsSummaryComponent } from './guests-summary/guests-summary.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { WeddingDetailsDialogComponent } from './wedding-details-dialog/wedding-details-dialog.component';

@NgModule({
  declarations: [
    HomePageComponent,
    CalendarSummaryComponent,
    GuestsSummaryComponent,
    BudgetSummaryComponent,
    WeddingDetailsDialogComponent,
  ],
  imports: [CommonModule, SharedModule, HomePageRoutingModule],
  entryComponents: [WeddingDetailsDialogComponent],
})
export class HomePageModule {}
