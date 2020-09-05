import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@core/auth/guards/auth-guard';
import { TokenInterceptor } from '@core/auth/interceptors/token.interceptor';
import { CommonLibsModule } from '@core/shared/common-libs.module';
import { ActionBarComponent } from '@mobile/shared/action-bar/action-bar.component';
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptHttpClientModule, CommonLibsModule],
  exports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    CommonLibsModule,
    ActionBarComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    AuthGuard,
  ],
  declarations: [ActionBarComponent],
})
export class SharedModule {}
