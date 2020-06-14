import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateIncomeDto } from './../../../api/models/create-income-dto';
import { AuthService } from './../../../auth/services/auth.service';

@Component({
  selector: 'app-add-income-dialog',
  templateUrl: './add-income-dialog.component.html',
  styleUrls: ['./add-income-dialog.component.scss'],
})
export class AddIncomeDialogComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddIncomeDialogComponent>,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public retrieve(): CreateIncomeDto {
    return {
      plannerId: +this.authService.getPlannerId(),
      source: this.form.get('source').value,
      amount: this.form.get('amount').value,
    };
  }

  private registerFormControls(): void {
    this.form = this.fb.group({
      source: [''],
      amount: [0],
    });
  }

  ngOnInit() {
    this.registerFormControls();
  }
}
