import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SharedModule } from './../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [AuthComponent, LoginPageComponent, RegisterPageComponent],
  imports: [NativeScriptCommonModule, SharedModule, AuthRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AuthModule {}
