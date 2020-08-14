import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { saveNewIncomeAction } from 'src/app/store/actions/budget.actions';
import { AppState } from 'src/app/store/state/app.state';
import { userSelectors } from 'src/app/store/state/user.state';

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
      source: [''],
      amount: [0],
    });
  }

  ngOnInit() {
    this.registerFormControls();
  }
}
