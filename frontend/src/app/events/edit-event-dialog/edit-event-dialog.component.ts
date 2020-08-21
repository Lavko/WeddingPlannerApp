import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { EventDto } from './../../api/models/event-dto';
import { convertDateToUTC } from './../../shared/helpers/date.helpers';
import { ValidateForm } from './../../shared/helpers/form.helpers';
import { deleteEventAction, saveEditedEventAction } from './../../store/actions/calendar.actions';
import { AppState } from './../../store/state/app.state';

@Component({
  selector: 'app-edit-event-dialog',
  templateUrl: './edit-event-dialog.component.html',
  styleUrls: ['./edit-event-dialog.component.scss'],
})
export class EditEventDialogComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EventDto,
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
    const eventDto = {
      id: this.data.id,
      plannerId: this.data.plannerId,
      title: this.form.get('title').value,
      date: convertDateToUTC(this.form.get('date').value).toLocaleDateString('en-US'),
      color: this.form.get('color').value,
    };

    this.store.dispatch(saveEditedEventAction({ event: eventDto }));
    this.dialogRef.close();
  }

  public onRemoveClick(): void {
    this.store.dispatch(deleteEventAction({ eventId: this.data.id }));
    this.dialogRef.close();
  }

  private registerFormControls(): void {
    this.form = this.fb.group({
      title: [this.data.title, Validators.required],
      date: [this.data.date, Validators.required],
      color: [this.data.color, Validators.required],
    });
  }
}
