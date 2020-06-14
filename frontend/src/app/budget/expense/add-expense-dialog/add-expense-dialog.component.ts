import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { ServiceProviderService } from 'src/app/api/services';
import { CreateExpenseDto } from './../../../api/models/create-expense-dto';
import { ExpenseStatus } from './../../../api/models/expense-status';
import { AuthService } from './../../../auth/services/auth.service';

@Component({
  selector: 'app-add-expense-dialog',
  templateUrl: './add-expense-dialog.component.html',
  styleUrls: ['./add-expense-dialog.component.scss'],
})
export class AddExpenseDialogComponent implements OnInit {
  public form: FormGroup;
  public serviceProvidersOptions: { value: number; label: string }[];

  constructor(
    public dialogRef: MatDialogRef<AddExpenseDialogComponent>,
    private authService: AuthService,
    private fb: FormBuilder,
    private serviceProviderService: ServiceProviderService
  ) {}

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public retrieve(): CreateExpenseDto {
    return {
      plannerId: +this.authService.getPlannerId(),
      name: this.getControlValue('name'),
      amount: +this.getControlValue('amount'),
      adnotation: this.getControlValue('adnotation'),
      deposit: +this.getControlValue('deposit'),
      expenseStatus: +this.getControlValue('expenseStatus') as ExpenseStatus,
      serviceProviderId:
        +this.getControlValue('serviceProviderId') > 0 ? +this.getControlValue('serviceProviderId') : null,
    };
  }

  private getControlValue(controlName: string): string {
    if (this.form && this.form.get(controlName)) {
      return this.form.get(controlName).value;
    }
    return '';
  }

  private registerFormControls(): void {
    this.form = this.fb.group({
      name: [''],
      amount: [0],
      adnotation: [''],
      deposit: [0],
      expenseStatus: [''],
      serviceProviderId: [null],
    });
  }

  private retrieveServiceProviders(): void {
    this.serviceProviderService
      .ServiceProviderGetAll()
      .pipe(
        map((serviceProviders) => {
          const mapped = serviceProviders.map((sp) => {
            return { value: sp.id, label: sp.name };
          });
          if (mapped) {
            return mapped;
          }
          return [];
        })
      )
      .subscribe((result) => {
        this.serviceProvidersOptions = result;
      });
  }

  ngOnInit() {
    this.retrieveServiceProviders();
    this.registerFormControls();
  }
}
