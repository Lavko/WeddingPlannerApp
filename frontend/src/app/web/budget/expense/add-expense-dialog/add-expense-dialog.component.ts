import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ExpenseStatus } from 'src/app/core/api/models/expense-status';
import { ValidateForm } from 'src/app/core/shared/helpers/form.helpers';
import { saveNewExpenseAction } from 'src/app/core/store/actions/budget.actions';
import { AppState } from 'src/app/core/store/state/app.state';
import { serviceProvidersSelectors } from 'src/app/core/store/state/serviceProviders.state';
import { userSelectors } from 'src/app/core/store/state/user.state';

@Component({
  selector: 'app-add-expense-dialog',
  templateUrl: './add-expense-dialog.component.html',
  styleUrls: ['./add-expense-dialog.component.scss'],
})
export class AddExpenseDialogComponent implements OnInit {
  public form: FormGroup;
  public serviceProvidersOptions: { value: number; label: string }[];
  public plannerId$ = userSelectors.getPlannerId(this.store);

  constructor(
    public dialogRef: MatDialogRef<AddExpenseDialogComponent>,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onAddClick(plannerId: number): void {
    ValidateForm.validateAllFormFields(this.form);
    if (!this.form.valid) {
      return;
    }
    const expenseDto = {
      plannerId,
      name: this.getControlValue('name'),
      amount: +this.getControlValue('amount'),
      adnotation: this.getControlValue('adnotation'),
      deposit: +this.getControlValue('deposit'),
      expenseStatus: +this.getControlValue('expenseStatus') as ExpenseStatus,
      serviceProviderId:
        +this.getControlValue('serviceProviderId') > 0 ? +this.getControlValue('serviceProviderId') : null,
    };

    this.store.dispatch(saveNewExpenseAction({ expenseDto }));
    this.dialogRef.close();
  }

  private getControlValue(controlName: string): string {
    if (this.form && this.form.get(controlName)) {
      return this.form.get(controlName).value;
    }
    return '';
  }

  private registerFormControls(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]],
      adnotation: [''],
      deposit: [0],
      expenseStatus: [null, Validators.required],
      serviceProviderId: [null],
    });
  }

  private retrieveServiceProviders(): void {
    serviceProvidersSelectors
      .getServiceProviders(this.store)
      .pipe(
        map((serviceProviders) => {
          const mapped = serviceProviders.map((sp) => {
            return { value: sp.id, label: sp.name };
          });
          if (mapped) {
            return mapped;
          }
          return [];
        })
      )
      .subscribe((result) => {
        this.serviceProvidersOptions = result;
      });
  }

  ngOnInit() {
    this.retrieveServiceProviders();
    this.registerFormControls();
  }
}
