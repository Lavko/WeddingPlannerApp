import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { ServiceProvidersComponent } from './service-providers.component';

const routes: Routes = [{ path: '', component: ServiceProvidersComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class ServiceProvidersRoutingModule {}
