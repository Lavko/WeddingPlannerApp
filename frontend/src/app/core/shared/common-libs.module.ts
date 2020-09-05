import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@core/auth/guards/auth-guard';
import { TokenInterceptor } from '@core/auth/interceptors/token.interceptor';
import { GuestSidePipe } from '@core/shared/pipes/guest-side.pipe';
import { GuestStatusPipe } from '@core/shared/pipes/guest-status.pipe';
import { ServiceTypePipe } from '@core/shared/pipes/service-type.pipe';

@NgModule({
  declarations: [GuestStatusPipe, GuestSidePipe, ServiceTypePipe],
  exports: [GuestSidePipe, GuestStatusPipe, ServiceTypePipe],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    AuthGuard,
  ],
})
export class CommonLibsModule {}
