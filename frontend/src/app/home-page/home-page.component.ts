import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getSummaryAction } from '../store/actions/summaryActions';
import { AppState } from '../store/state/app.state';
import { summarySelectors } from './../store/state/summary.state';
import { WeddingDetailsDialogComponent } from './wedding-details-dialog/wedding-details-dialog.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public userName$: Observable<string>;
  public partnerName$: Observable<string>;
  public weddingDate$: Observable<string>;
  constructor(private store: Store<AppState>, public dialog: MatDialog) {}

  ngOnInit() {
    this.store.dispatch(getSummaryAction());
    this.userName$ = summarySelectors.getUserName(this.store);
    this.partnerName$ = summarySelectors.getPartnerName(this.store);
    this.weddingDate$ = summarySelectors.getWeddingDate(this.store);

    this.initWeddingDetailsDialog();
  }

  initWeddingDetailsDialog() {
    summarySelectors.isWeddingDetailsSaved(this.store).subscribe((isSaved) => {
      if (!isSaved) {
        const dialogRef = this.dialog.open(WeddingDetailsDialogComponent, {
          width: '650px',
          data: { partnerName: '', weddingDate: '' },
        });
      }
    });
  }

  editWeddingDetails() {
    const dialogRef = this.dialog.open(WeddingDetailsDialogComponent, {
      width: '650px',
      data: { partnerName: this.partnerName$, weddingDate: this.weddingDate$ },
    });
  }
}
