import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { AddGuestDialogComponent } from './add-guest-dialog/add-guest-dialog.component';
import { GuestsListComponent } from './guests-list/guests-list.component';
import { GuestsRoutingModule } from './guests-routing.module';
import { GuestsComponent } from './guests.component';

@NgModule({
  declarations: [GuestsComponent, GuestsListComponent, AddGuestDialogComponent],
  imports: [CommonModule, GuestsRoutingModule, SharedModule],
  entryComponents: [AddGuestDialogComponent]
})
export class GuestsModule {}
