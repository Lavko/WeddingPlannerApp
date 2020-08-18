import { CommonModule, registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { NgModule } from '@angular/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SharedModule } from '../shared/shared.module';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { EventsRoutingModule } from './events-routing.module';

registerLocaleData(localePl);
@NgModule({
  declarations: [CalendarPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    EventsRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
})
export class EventsModule {}
