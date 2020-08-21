import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { saveNewServiceProviderAction } from 'src/app/store/actions/serviceProviders.actions';
import { AppState } from 'src/app/store/state/app.state';
import { ValidateForm } from './../../shared/helpers/form.helpers';

@Component({
  selector: 'app-add-service-provider-dialog',
  templateUrl: './add-service-provider-dialog.component.html',
  styleUrls: ['./add-service-provider-dialog.component.scss'],
})
export class AddServiceProviderDialogComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddServiceProviderDialogComponent>,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onAddClick(): void {
    ValidateForm.validateAllFormFields(this.form);
    if (!this.form.valid) {
      return;
    }
    const serviceProviderDto = {
      name: this.form.get('name').value,
      serviceType: this.form.get('serviceType').value,
      phoneNumber: this.form.get('phoneNumber').value,
      email: this.form.get('email').value,
      address: this.form.get('address').value,
    };

    this.store.dispatch(saveNewServiceProviderAction({ serviceProvider: serviceProviderDto }));
    this.dialogRef.close();
  }

  private registerFormControls(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      serviceType: [null, Validators.required],
      phoneNumber: ['', Validators.required],
      email: [''],
      address: [''],
    });
  }

  ngOnInit() {
    this.registerFormControls();
  }
}
