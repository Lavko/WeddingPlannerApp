import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ValidateForm } from 'src/app/core/shared/helpers/form.helpers';
import { saveNewIncomeAction } from 'src/app/core/store/actions/budget.actions';
import { AppState } from 'src/app/core/store/state/app.state';
import { userSelectors } from 'src/app/core/store/state/user.state';

@Component({
  selector: 'app-add-income-dialog',
  templateUrl: './add-income-dialog.component.html',
  styleUrls: ['./add-income-dialog.component.scss'],
})
export class AddIncomeDialogComponent implements OnInit {
  public form: FormGroup;
  public plannerId$ = userSelectors.getPlannerId(this.store);

  constructor(
    public dialogRef: MatDialogRef<AddIncomeDialogComponent>,
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
    const incomeDto = {
      plannerId,
      source: this.form.get('source').value,
      amount: this.form.get('amount').value,
    };

    this.store.dispatch(saveNewIncomeAction({ incomeDto }));
    this.dialogRef.close();
  }

  private registerFormControls(): void {
    this.form = this.fb.group({
      source: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {
    this.registerFormControls();
  }
}
