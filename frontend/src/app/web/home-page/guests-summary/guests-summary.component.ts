import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GuestSummaryDto } from 'src/app/core/api/models/guest-summary-dto';
import { AppState } from 'src/app/core/store/state/app.state';
import { summarySelectors } from 'src/app/core/store/state/summary.state';

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
