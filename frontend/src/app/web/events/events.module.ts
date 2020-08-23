import { CommonModule, registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { NgModule } from '@angular/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SharedModule } from '../shared/shared.module';
import { AddEventDialogComponent } from './add-event-dialog/add-event-dialog.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { EditEventDialogComponent } from './edit-event-dialog/edit-event-dialog.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventsRoutingModule } from './events-routing.module';

registerLocaleData(localePl);
@NgModule({
  declarations: [CalendarPageComponent, EventFormComponent, AddEventDialogComponent, EditEventDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    EventsRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  entryComponents: [EditEventDialogComponent, AddEventDialogComponent],
})
export class EventsModule {}
