import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent],
  entryComponents: [],
  imports: [AuthRoutingModule, SharedModule],
  providers: [],
})
export class AuthModule {}
