import { Component, OnInit } from '@angular/core';
import { GuestDto } from '@core/api/models';
import { getGuestsAction } from '@core/store/actions/guests.actions';
import { AppState } from '@core/store/state/app.state';
import { guestsSelectors } from '@core/store/state/guests.state';
import { RouterExtensions } from '@nativescript/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss'],
})
export class GuestListComponent implements OnInit {
  public guests$: Observable<GuestDto[]>;

  constructor(private routerExtensions: RouterExtensions, private store: Store<AppState>) {}

  goBack() {
    this.routerExtensions.backToPreviousPage();
  }

  ngOnInit(): void {
    this.store.dispatch(getGuestsAction());
    this.guests$ = guestsSelectors.getGuests(this.store);
  }
}
