import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { GuestDto } from 'src/app/core/api/models';
import { ValidateForm } from 'src/app/core/shared/helpers/form.helpers';
import { deleteGuestAction, saveEditedGuestAction } from 'src/app/core/store/actions/guests.actions';
import { AppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-edit-guest-dialog',
  templateUrl: './edit-guest-dialog.component.html',
  styleUrls: ['./edit-guest-dialog.component.scss'],
})
export class EditGuestDialogComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditGuestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GuestDto,
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
    const guestDto = {
      id: this.data.id,
      plannerId: this.data.plannerId,
      name: this.form.get('name').value,
      adnotation: this.form.get('adnotation').value,
      isTravelling: this.form.get('isTravelling').value,
      status: this.form.get('status').value,
      side: this.form.get('side').value,
    };

    this.store.dispatch(saveEditedGuestAction({ guest: guestDto }));
    this.dialogRef.close();
  }

  public onRemoveClick(): void {
    this.store.dispatch(deleteGuestAction({ guestId: this.data.id }));
    this.dialogRef.close();
  }

  private registerFormControls(): void {
    this.form = this.fb.group({
      name: [this.data.name, Validators.required],
      adnotation: [this.data.adnotation, Validators.maxLength(200)],
      isTravelling: [this.data.isTravelling],
      status: [this.data.status, Validators.required],
      side: [this.data.side, Validators.required],
    });
  }
}
