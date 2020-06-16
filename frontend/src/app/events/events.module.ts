import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SharedModule } from '../shared/shared.module';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  declarations: [CalendarPageComponent],
  imports: [CommonModule, SharedModule, FullCalendarModule, EventsRoutingModule],
})
export class EventsModule {}
