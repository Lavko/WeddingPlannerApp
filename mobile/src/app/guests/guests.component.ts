import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { GuestDto } from '../api/models';
import { AuthService } from '../auth/services/auth.service';
import { AppState } from '../store/state/app.state';
import { getGuestsAction } from './../store/actions/guests.actions';
import { guestsSelectors } from './../store/state/guests.state';

@Component({
  selector: 'ns-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css'],
})
export class GuestsComponent implements OnInit {
  guests: ObservableArray<GuestDto>;
  public selectedIndexes = [0, 3];
  constructor(private store: Store<AppState>, private authService: AuthService) {}

  ngOnInit() {
    this.store.dispatch(getGuestsAction());
    this.retrieveData();
  }

  onDrawerButtonTap(): void {
    const sideDrawer = app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }

  private retrieveData(): void {
    guestsSelectors.getGuests(this.store).subscribe((guests) => {
      this.guests = new ObservableArray(guests);
    });
  }
}
