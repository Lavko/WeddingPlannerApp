import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/state/app.state';
import { GuestSummaryDto } from './../../api/models/guest-summary-dto';
import { summarySelectors } from './../../store/state/summary.state';

@Component({
  selector: 'app-guests-summary',
  templateUrl: './guests-summary.component.html',
  styleUrls: ['./guests-summary.component.scss'],
})
export class GuestsSummaryComponent implements OnInit {
  public guestsSummary$: Observable<GuestSummaryDto>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.guestsSummary$ = summarySelectors.getGuestSummary(this.store);
  }
}
