import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { GuestDto } from '../api/models';
import { GuestService } from '../api/services';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'ns-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css'],
})
export class GuestsComponent implements OnInit {
  guests: Array<GuestDto>;

  constructor(private guestService: GuestService, private authService: AuthService) {}

  ngOnInit() {
    this.retrieveData();
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  private retrieveData(): void {
    const plannerId = this.authService.getPlannerId();
    this.guestService.GuestGetAll(+plannerId).subscribe((result) => (this.guests = result));
  }
}
