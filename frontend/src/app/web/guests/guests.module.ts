import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AddGuestDialogComponent } from './add-guest-dialog/add-guest-dialog.component';
import { EditGuestDialogComponent } from './edit-guest-dialog/edit-guest-dialog.component';
import { GuestFormComponent } from './guest-form/guest-form.component';
import { GuestsListPageComponent } from './guests-list-page/guests-list-page.component';
import { GuestsRoutingModule } from './guests-routing.module';

@NgModule({
  declarations: [GuestFormComponent, AddGuestDialogComponent, EditGuestDialogComponent, GuestsListPageComponent],
  imports: [CommonModule, GuestsRoutingModule, SharedModule],
  entryComponents: [AddGuestDialogComponent, EditGuestDialogComponent],
})
export class GuestsModule {}
