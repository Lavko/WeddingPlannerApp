import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { Api } from '../api/api';
import { AngularMaterialModule } from './../../angular-material.module';
import { AuthGuard } from './guards/auth-guard';

@NgModule({
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
    ToastrModule
  ],
  providers: [Api.UsersClient, AuthGuard]
})
export class SharedModule {}
