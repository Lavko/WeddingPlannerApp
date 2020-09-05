import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { ProvidersListComponent } from './providers-list/providers-list.component';
import { ProvidersRoutingModule } from './providers-routing.module';

@NgModule({
  declarations: [ProvidersListComponent],
  imports: [CommonModule, ProvidersRoutingModule, SharedModule],
})
export class ProvidersModule {}
