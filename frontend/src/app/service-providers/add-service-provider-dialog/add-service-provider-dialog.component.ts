import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateServiceProviderDto } from './../../api/models/create-service-provider-dto';
import { AuthService } from './../../auth/services/auth.service';

@Component({
  selector: 'app-add-service-provider-dialog',
  templateUrl: './add-service-provider-dialog.component.html',
  styleUrls: ['./add-service-provider-dialog.component.scss'],
})
export class AddServiceProviderDialogComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddServiceProviderDialogComponent>,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public retrieve(): CreateServiceProviderDto {
    return {
      name: this.form.get('name').value,
      serviceType: this.form.get('serviceType').value,
      phoneNumber: this.form.get('phoneNumber').value,
      email: this.form.get('email').value,
      address: this.form.get('address').value,
    };
  }

  private registerFormControls(): void {
    this.form = this.fb.group({
      name: [''],
      serviceType: [0],
      phoneNumber: [''],
      email: [''],
      address: [''],
    });
  }

  ngOnInit() {
    this.registerFormControls();
  }
}
