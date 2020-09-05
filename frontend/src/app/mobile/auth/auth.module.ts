import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent],
  imports: [SharedModule, AuthRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AuthModule {}
