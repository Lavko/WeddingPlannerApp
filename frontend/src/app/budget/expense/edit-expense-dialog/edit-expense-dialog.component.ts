import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ExpenseDto } from 'src/app/api/models';
import { ExpenseStatus } from 'src/app/api/models/expense-status';
import { deleteExpenseAction, saveEditedExpenseAction } from 'src/app/store/actions/budget.actions';
import { AppState } from 'src/app/store/state/app.state';
import { serviceProvidersSelectors } from 'src/app/store/state/serviceProviders.state';

@Component({
  selector: 'app-edit-expense-dialog',
  templateUrl: './edit-expense-dialog.component.html',
  styleUrls: ['./edit-expense-dialog.component.scss'],
})
export class EditExpenseDialogComponent implements OnInit {
  public form: FormGroup;
  public serviceProvidersOptions: { value: number; label: string }[];

  constructor(
    public dialogRef: MatDialogRef<EditExpenseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ExpenseDto,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public ngOnInit(): void {
    this.retrieveServiceProviders();
    this.registerFormControls();
  }

  public onSaveClick(): void {
    const expenseDto = {
      id: this.data.id,
      plannerId: this.data.plannerId,
      name: this.getControlValue('name'),
      amount: +this.getControlValue('amount'),
      adnotation: this.getControlValue('adnotation'),
      deposit: +this.getControlValue('deposit'),
      expenseStatus: +this.getControlValue('expenseStatus') as ExpenseStatus,
      serviceProviderId:
        +this.getControlValue('serviceProviderId') > 0 ? +this.getControlValue('serviceProviderId') : null,
    };

    this.store.dispatch(saveEditedExpenseAction({ expenseDto }));
    this.dialogRef.close();
  }

  private getControlValue(controlName: string): string {
    if (this.form && this.form.get(controlName)) {
      return this.form.get(controlName).value;
    }
    return '';
  }

  public onRemoveClick(): void {
    this.store.dispatch(deleteExpenseAction({ expenseId: this.data.id }));
    this.dialogRef.close();
  }

  private registerFormControls(): void {
    this.form = this.fb.group({
      name: [this.data.name],
      amount: [this.data.amount],
      adnotation: [this.data.adnotation],
      deposit: [this.data.deposit],
      expenseStatus: [this.data.expenseStatus],
      serviceProviderId: [this.data.serviceProvider.id],
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
}
