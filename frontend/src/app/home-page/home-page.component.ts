import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSummaryAction } from '../store/actions/summaryActions';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(getSummaryAction());
  }
}
