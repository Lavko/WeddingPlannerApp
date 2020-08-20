import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { convertDateToUTC } from './../../shared/helpers/date.helpers';
import { saveNewEventAction } from './../../store/actions/calendar.actions';
import { AppState } from './../../store/state/app.state';
import { userSelectors } from './../../store/state/user.state';

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
      title: [''],
      date: [''],
      color: [],
    });
  }

  ngOnInit() {
    this.plannerId$ = userSelectors.getPlannerId(this.store);
    this.registerFormControls();
  }
}
