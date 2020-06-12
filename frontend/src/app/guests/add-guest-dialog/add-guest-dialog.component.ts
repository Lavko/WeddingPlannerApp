import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateGuestDto } from 'src/app/api/models';
import { AuthService } from './../../auth/services/auth.service';

@Component({
  selector: 'app-add-guest-dialog',
  templateUrl: './add-guest-dialog.component.html',
  styleUrls: ['./add-guest-dialog.component.scss'],
})
export class AddGuestDialogComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddGuestDialogComponent>,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public retrieve(): CreateGuestDto {
    return {
      plannerId: +this.authService.getPlannerId(),
      name: this.form.get('name').value,
      adnotation: this.form.get('adnotation').value,
      isTravelling: this.form.get('isTravelling').value,
      status: this.form.get('status').value,
      side: this.form.get('side').value,
    };
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
    this.registerFormControls();
  }
}
