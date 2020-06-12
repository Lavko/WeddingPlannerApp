import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateServiceProviderDto } from 'src/app/api/models';
import { AuthService } from './../../auth/services/auth.service';

@Component({
  selector: 'app-edit-service-provider-dialog',
  templateUrl: './edit-service-provider-dialog.component.html',
  styleUrls: ['./edit-service-provider-dialog.component.scss'],
})
export class EditServiceProviderDialogComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditServiceProviderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UpdateServiceProviderDto,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public ngOnInit(): void {
    this.registerFormControls();
  }

  public retrieve(): UpdateServiceProviderDto {
    return {
      id: this.data.id,
      name: this.form.get('name').value,
      serviceType: this.form.get('serviceType').value,
      phoneNumber: this.form.get('phoneNumber').value,
      email: this.form.get('email').value,
      address: this.form.get('address').value,
    };
  }

  public remove(): string {
    return 'remove';
  }

  private registerFormControls(): void {
    this.form = this.fb.group({
      name: [this.data.name],
      serviceType: [this.data.serviceType],
      phoneNumber: [this.data.phoneNumber],
      email: [this.data.email],
      address: [this.data.address],
    });
  }
}
