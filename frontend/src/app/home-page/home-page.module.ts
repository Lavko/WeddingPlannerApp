import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomeTileComponent } from './home-tile/home-tile.component';
import { CalendarSummaryComponent } from './calendar-summary/calendar-summary.component';



@NgModule({
  declarations: [HomePageComponent, HomeTileComponent, CalendarSummaryComponent],
  imports: [
    CommonModule
  ]
})
export class HomePageModule { }
