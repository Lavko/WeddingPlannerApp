import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthGuard } from './../auth/guards/auth-guard';
import { TokenInterceptor } from './../auth/interceptors/token.interceptor';
import { GuestSidePipe } from './pipes/guest-side.pipe';
import { GuestStatusPipe } from './pipes/guest-status.pipe';
import { ServiceTypePipe } from './pipes/service-type.pipe';
@NgModule({
  declarations: [GuestStatusPipe, GuestSidePipe, ServiceTypePipe],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTableModule,
    GuestSidePipe,
    GuestStatusPipe,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ServiceTypePipe,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    AuthGuard,
    MatDatepickerModule,
  ],
})
export class SharedModule {}
