import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateIncomeDto } from './../../../api/models/update-income-dto';
import { AuthService } from './../../../auth/services/auth.service';

@Component({
  selector: 'app-edit-income-dialog',
  templateUrl: './edit-income-dialog.component.html',
  styleUrls: ['./edit-income-dialog.component.scss'],
})
export class EditIncomeDialogComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditIncomeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UpdateIncomeDto,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public ngOnInit(): void {
    this.registerFormControls();
  }

  public retrieve(): UpdateIncomeDto {
    return {
      id: this.data.id,
      plannerId: +this.authService.getPlannerId(),
      source: this.form.get('source').value,
      amount: this.form.get('amount').value,
    };
  }

  public remove(): string {
    return 'remove';
  }

  private registerFormControls(): void {
    this.form = this.fb.group({
      source: [this.data.source],
      amount: [this.data.amount],
    });
  }
}
