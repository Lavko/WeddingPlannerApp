import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AccordionModule } from 'nativescript-accordion/angular';
import { NativeScriptFormsModule, NativeScriptHttpClientModule } from 'nativescript-angular';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { AuthGuard } from '../auth/guards/auth-guard';
import { TokenInterceptor } from '../auth/interceptors/token.interceptor';
import { ExpenseStatusPipe } from './pipes/expense-status.pipe';
import { GuestSidePipe } from './pipes/guest-side.pipe';
import { GuestStatusPipe } from './pipes/guest-status.pipe';
import { ServiceTypePipe } from './pipes/service-type.pipe';

@NgModule({
  declarations: [ExpenseStatusPipe, GuestSidePipe, GuestStatusPipe, ServiceTypePipe],
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    NativeScriptUIListViewModule,
  ],
  exports: [
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    NativeScriptUIListViewModule,
    AccordionModule,
    ExpenseStatusPipe,
    GuestSidePipe,
    GuestStatusPipe,
    ServiceTypePipe,
  ],
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
