import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { UpdateWeddingDetailsDto } from './../../api/models/update-wedding-details-dto';
import { convertDateToUTC } from './../../shared/helpers/date.helpers';
import { ValidateForm } from './../../shared/helpers/form.helpers';
import { saveWeddingDetailsAction } from './../../store/actions/summaryActions';
import { AppState } from './../../store/state/app.state';
import { userSelectors } from './../../store/state/user.state';

@Component({
  selector: 'app-wedding-details-dialog',
  templateUrl: './wedding-details-dialog.component.html',
  styleUrls: ['./wedding-details-dialog.component.scss'],
})
export class WeddingDetailsDialogComponent implements OnInit {
  public form: FormGroup;
  public plannerId$: Observable<number>;
  public partnerName: string;
  public weddingDate: string;

  constructor(
    public dialogRef: MatDialogRef<WeddingDetailsDialogComponent>,
    private fb: FormBuilder,
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: { partnerName: Observable<string>; weddingDate: Observable<string> }
  ) {}

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onSaveClick(plannerId: number): void {
    ValidateForm.validateAllFormFields(this.form);
    if (!this.form.valid) {
      return;
    }
    const updateWeddingDetailsDto = {
      id: plannerId,
      partnerName: this.form.get('partnerName').value,
      weddingDate: convertDateToUTC(this.form.get('weddingDate').value).toLocaleDateString('en-US'),
    } as UpdateWeddingDetailsDto;
    this.store.dispatch(saveWeddingDetailsAction({ updateWeddingDetailsDto }));
    this.dialogRef.close();
  }

  private registerFormControls(): void {
    this.form = this.fb.group({
      partnerName: [this.partnerName, Validators.required],
      weddingDate: [this.weddingDate, Validators.required],
    });
  }

  public ngOnInit(): void {
    combineLatest(this.data.partnerName, this.data.weddingDate).subscribe(([partnerName, weddingDate]) => {
      this.partnerName = partnerName;
      this.weddingDate = weddingDate;
    });
    this.plannerId$ = userSelectors.getPlannerId(this.store);
    this.registerFormControls();
  }
}
