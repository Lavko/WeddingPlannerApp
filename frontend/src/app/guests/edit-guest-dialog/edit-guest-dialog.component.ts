import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateGuestDto } from 'src/app/api/models';
import { AuthService } from './../../auth/services/auth.service';

@Component({
  selector: 'app-edit-guest-dialog',
  templateUrl: './edit-guest-dialog.component.html',
  styleUrls: ['./edit-guest-dialog.component.scss'],
})
export class EditGuestDialogComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditGuestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UpdateGuestDto,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public ngOnInit(): void {
    this.registerFormControls();
  }

  public retrieve(): UpdateGuestDto {
    return {
      id: this.data.id,
      plannerId: +this.authService.getPlannerId(),
      name: this.form.get('name').value,
      adnotation: this.form.get('adnotation').value,
      isTravelling: this.form.get('isTravelling').value,
      status: this.form.get('status').value,
      side: this.form.get('side').value,
    };
  }

  public remove(): string {
    return 'remove';
  }

  private registerFormControls(): void {
    this.form = this.fb.group({
      name: [this.data.name],
      adnotation: [this.data.adnotation],
      isTravelling: [this.data.isTravelling],
      status: [this.data.status],
      side: [this.data.side],
    });
  }
}
