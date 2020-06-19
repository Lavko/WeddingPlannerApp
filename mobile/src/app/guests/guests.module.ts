import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { GuestsRoutingModule } from './guests-routing.module';
import { GuestsComponent } from './guests.component';

@NgModule({
  declarations: [GuestsComponent],
  imports: [NativeScriptCommonModule, GuestsRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class GuestsModule {}
