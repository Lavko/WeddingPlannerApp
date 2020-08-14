import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { saveNewGuestAction } from 'src/app/store/actions/guests.actions';
import { AppState } from 'src/app/store/state/app.state';
import { userSelectors } from 'src/app/store/state/user.state';

@Component({
  selector: 'app-add-guest-dialog',
  templateUrl: './add-guest-dialog.component.html',
  styleUrls: ['./add-guest-dialog.component.scss'],
})
export class AddGuestDialogComponent implements OnInit {
  public form: FormGroup;
  public plannerId$: Observable<number>;

  constructor(
    public dialogRef: MatDialogRef<AddGuestDialogComponent>,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onAddClick(plannerId: number): void {
    const guestDto = {
      plannerId,
      name: this.form.get('name').value,
      adnotation: this.form.get('adnotation').value,
      isTravelling: this.form.get('isTravelling').value,
      status: this.form.get('status').value,
      side: this.form.get('side').value,
    };
    this.store.dispatch(saveNewGuestAction({ guest: guestDto }));
    this.dialogRef.close();
  }

  private registerFormControls(): void {
    this.form = this.fb.group({
      name: [''],
      adnotation: [''],
      isTravelling: [false],
      status: [0],
      side: [0],
    });
  }

  ngOnInit() {
    this.plannerId$ = userSelectors.getPlannerId(this.store);
    this.registerFormControls();
  }
}
