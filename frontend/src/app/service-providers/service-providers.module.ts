import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AddServiceProviderDialogComponent } from './add-service-provider-dialog/add-service-provider-dialog.component';
import { EditServiceProviderDialogComponent } from './edit-service-provider-dialog/edit-service-provider-dialog.component';
import { ServiceProviderFormComponent } from './service-provider-form/service-provider-form.component';
import { ServiceProvidersListPageComponent } from './service-providers-list-page/service-providers-list-page.component';
import { ServiceProvidersRoutingModule } from './service-providers-routing.module';

@NgModule({
  declarations: [
    ServiceProvidersListPageComponent,
    EditServiceProviderDialogComponent,
    AddServiceProviderDialogComponent,
    ServiceProviderFormComponent,
  ],
  imports: [CommonModule, ServiceProvidersRoutingModule, SharedModule],
  entryComponents: [AddServiceProviderDialogComponent, EditServiceProviderDialogComponent],
})
export class ServiceProvidersModule {}
