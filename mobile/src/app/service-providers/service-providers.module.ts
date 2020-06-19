import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ServiceProvidersRoutingModule } from './service-providers-routing.module';
import { ServiceProvidersComponent } from './service-providers.component';

@NgModule({
  declarations: [ServiceProvidersComponent],
  imports: [NativeScriptCommonModule, ServiceProvidersRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ServiceProvidersModule {}
