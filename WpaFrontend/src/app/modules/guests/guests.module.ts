import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { GuestsRoutingModule } from './guests-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, GuestsRoutingModule, SharedModule]
})
export class GuestsModule {}
