import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';

@NgModule({
  declarations: [EventsComponent],
  imports: [NativeScriptCommonModule, EventsRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class EventsModule {}
