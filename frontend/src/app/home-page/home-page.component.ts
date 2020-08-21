import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getSummaryAction } from '../store/actions/summaryActions';
import { AppState } from '../store/state/app.state';
import { summarySelectors } from './../store/state/summary.state';
import { userSelectors } from './../store/state/user.state';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public userName: Observable<string>;
  public partnerName: Observable<string>;
  public weddingDate: Observable<string>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(getSummaryAction());
    this.userName = userSelectors.getFirstName(this.store);
    this.partnerName = summarySelectors.getPartnerName(this.store);
    this.weddingDate = summarySelectors.getWeddingDate(this.store);
  }
}
