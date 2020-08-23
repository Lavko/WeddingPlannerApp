import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { convertDateToUTC } from 'src/app/core/shared/helpers/date.helpers';
import { ValidateForm } from 'src/app/core/shared/helpers/form.helpers';
import { saveNewEventAction } from 'src/app/core/store/actions/calendar.actions';
import { AppState } from 'src/app/core/store/state/app.state';
import { userSelectors } from 'src/app/core/store/state/user.state';

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.scss'],
})
export class AddEventDialogComponent implements OnInit {
  public form: FormGroup;
  public plannerId$: Observable<number>;

  constructor(
    public dialogRef: MatDialogRef<AddEventDialogComponent>,
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
    const eventDto = {
      plannerId,
      title: this.form.get('title').value,
      date: convertDateToUTC(this.form.get('date').value).toLocaleDateString('en-US'),
      color: this.form.get('color').value,
    };
    this.store.dispatch(saveNewEventAction({ event: eventDto }));
    this.dialogRef.close();
  }

  private registerFormControls(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      color: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.plannerId$ = userSelectors.getPlannerId(this.store);
    this.registerFormControls();
  }
}
