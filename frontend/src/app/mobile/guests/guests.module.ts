import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { GuestListComponent } from './guest-list/guest-list.component';
import { GuestsRoutingModule } from './guests-routing.module';

@NgModule({
  declarations: [GuestListComponent],
  imports: [CommonModule, GuestsRoutingModule, SharedModule],
})
export class GuestsModule {}
