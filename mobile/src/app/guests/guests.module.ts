import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SharedModule } from './../shared/shared.module';
import { GuestsRoutingModule } from './guests-routing.module';
import { GuestsComponent } from './guests.component';
import { GuestsListItemComponent } from './guests-list-item/guests-list-item.component';

@NgModule({
  declarations: [GuestsComponent, GuestsListItemComponent],
  imports: [NativeScriptCommonModule, GuestsRoutingModule, SharedModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class GuestsModule {}
