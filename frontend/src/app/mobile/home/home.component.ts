import { Component, OnInit } from '@angular/core';
import { getSummaryAction } from '@core/store/actions/summaryActions';
import { AppState } from '@core/store/state/app.state';
import { summarySelectors } from '@core/store/state/summary.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IconService } from './../shared/icon.service';
import { IconsEnum } from './../shared/icons.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private MS_PER_DAY = 1000 * 60 * 60 * 24;
  private MS_PER_HOUR = 1000 * 60 * 60;
  private MS_PER_MINUTE = 1000 * 60;
  private MS_PER_SECOND = 1000;
  IconsEnum = IconsEnum;

  public weddingDate$: Observable<string>;
  constructor(public iconService: IconService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getSummaryAction());
    this.weddingDate$ = summarySelectors.getWeddingDate(this.store);
  }
}
