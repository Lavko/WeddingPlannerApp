import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { ExpenseDto } from 'src/app/api/models';
import { ServiceProviderService } from 'src/app/api/services';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ExpenseStatus } from './../../../api/models/expense-status';
import { UpdateExpenseDto } from './../../../api/models/update-expense-dto';

@Component({
  selector: 'app-edit-expense-dialog',
  templateUrl: './edit-expense-dialog.component.html',
  styleUrls: ['./edit-expense-dialog.component.scss'],
})
export class EditExpenseDialogComponent implements OnInit {
  public form: FormGroup;
  public serviceProvidersOptions: { value: number; label: string }[];

  constructor(
    public dialogRef: MatDialogRef<EditExpenseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ExpenseDto,
    private authService: AuthService,
    private fb: FormBuilder,
    private serviceProviderService: ServiceProviderService
  ) {}

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public ngOnInit(): void {
    this.retrieveServiceProviders();
    this.registerFormControls();
  }

  public retrieve(): UpdateExpenseDto {
    return {
      id: this.data.id,
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

  public remove(): string {
    return 'remove';
  }

  private registerFormControls(): void {
    this.form = this.fb.group({
      name: [this.data.name],
      amount: [this.data.amount],
      adnotation: [this.data.adnotation],
      deposit: [this.data.deposit],
      expenseStatus: [this.data.expenseStatus],
      serviceProviderId: [this.data.serviceProvider.id],
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
}
