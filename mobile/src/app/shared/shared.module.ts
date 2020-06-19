import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule, NativeScriptHttpClientModule } from 'nativescript-angular';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AuthGuard } from '../auth/guards/auth-guard';
import { TokenInterceptor } from '../auth/interceptors/token.interceptor';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptHttpClientModule],
  exports: [NativeScriptFormsModule, NativeScriptHttpClientModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}
