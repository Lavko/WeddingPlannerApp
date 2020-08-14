import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IncomeDto } from 'src/app/api/models/income-dto';
import { deleteIncomeAction, saveEditedIncomeAction } from 'src/app/store/actions/budget.actions';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-edit-income-dialog',
  templateUrl: './edit-income-dialog.component.html',
  styleUrls: ['./edit-income-dialog.component.scss'],
})
export class EditIncomeDialogComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditIncomeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IncomeDto,
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
    const incomeDto = {
      id: this.data.id,
      plannerId: this.data.plannerId,
      source: this.form.get('source').value,
      amount: this.form.get('amount').value,
    };

    this.store.dispatch(saveEditedIncomeAction({ incomeDto }));
    this.dialogRef.close();
  }

  public onRemoveClick(): void {
    this.store.dispatch(deleteIncomeAction({ incomeId: this.data.id }));
    this.dialogRef.close();
  }

  private registerFormControls(): void {
    this.form = this.fb.group({
      source: [this.data.source],
      amount: [this.data.amount],
    });
  }
}
