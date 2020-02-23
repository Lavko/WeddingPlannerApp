import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { Api } from '../api/api';
import { AngularMaterialModule } from './../../angular-material.module';
import { TokenInterceptor } from './../auth/interceptors/token.interceptor';
import { AuthGuard } from './guards/auth-guard';
import { GuestSidePipe } from './pipes/guest-side.pipe';
import { GuestStatusPipe } from './pipes/guest-status.pipe';

@NgModule({
  declarations: [GuestStatusPipe, GuestSidePipe],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    AngularMaterialModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    AngularMaterialModule,
    HttpClientModule,
    ToastrModule,
    GuestStatusPipe,
    GuestSidePipe
  ],
  providers: [
    Api.UsersClient,
    Api.GuestClient,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class SharedModule {}
