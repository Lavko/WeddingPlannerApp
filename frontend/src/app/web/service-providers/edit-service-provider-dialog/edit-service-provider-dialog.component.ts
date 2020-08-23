import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { UpdateServiceProviderDto } from 'src/app/core/api/models';
import { ValidateForm } from 'src/app/core/shared/helpers/form.helpers';
import {
  deleteServiceProviderAction,
  saveEditedServiceProviderAction,
} from 'src/app/core/store/actions/serviceProviders.actions';
import { AppState } from 'src/app/core/store/state/app.state';

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
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public ngOnInit(): void {
    this.registerFormControls();
  }

  public onSaveClick(): void {
    ValidateForm.validateAllFormFields(this.form);
    if (!this.form.valid) {
      return;
    }
    const serviceProviderDto = {
      id: this.data.id,
      name: this.form.get('name').value,
      serviceType: this.form.get('serviceType').value,
      phoneNumber: this.form.get('phoneNumber').value,
      email: this.form.get('email').value,
      address: this.form.get('address').value,
    };

    this.store.dispatch(saveEditedServiceProviderAction({ serviceProvider: serviceProviderDto }));
    this.dialogRef.close();
  }

  public onRemoveClick(): void {
    this.store.dispatch(deleteServiceProviderAction({ serviceProviderId: this.data.id }));
    this.dialogRef.close();
  }

  private registerFormControls(): void {
    this.form = this.fb.group({
      name: [this.data.name, Validators.required],
      serviceType: [this.data.serviceType, Validators.required],
      phoneNumber: [this.data.phoneNumber, Validators.required],
      email: [this.data.email],
      address: [this.data.address],
    });
  }
}
