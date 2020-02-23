import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Api } from '../../api/api';

@Component({
  selector: 'app-add-guest-dialog',
  templateUrl: './add-guest-dialog.component.html',
  styleUrls: ['./add-guest-dialog.component.css']
})
export class AddGuestDialogComponent implements OnInit {
  public form: FormGroup;
  public guestStatusOptions = [
    { value: 1, label: 'Poinformowany' },
    { value: 2, label: 'Zaproszony' },
    { value: 3, label: 'Potwierdzony' },
    { value: 4, label: 'Nie pojawi się' }
  ];

  public guestSideOptions = [
    { value: 1, label: 'Rodzina A' },
    { value: 2, label: 'Rodzina B' },
    { value: 3, label: 'Przyjaciele A' },
    { value: 4, label: 'Przyjaciele B' },
    { value: 5, label: 'Innej' }
  ];

  constructor(
    public dialogRef: MatDialogRef<AddGuestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Api.Guest,
    private fb: FormBuilder
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.registerFormControls();
  }

  public retrieveGuest(): Api.Guest {
    return {
      id: this.data.id,
      plannerId: this.data.plannerId,
      name: this.form.get('name').value,
      adnotation: this.form.get('adnotation').value,
      isTravelling: this.form.get('isTravelling').value,
      status: this.form.get('status').value,
      side: this.form.get('side').value
    };
  }

  private registerFormControls(): void {
    this.form = this.fb.group({
      name: [this.data.name],
      adnotation: [this.data.adnotation],
      isTravelling: [this.data.isTravelling],
      status: [this.data.status],
      side: [this.data.side]
    });
  }
}
