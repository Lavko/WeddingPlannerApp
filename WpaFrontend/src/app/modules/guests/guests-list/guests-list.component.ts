import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Api } from '../../api/api';
import { AuthService } from './../../auth/services/auth.service';
import { AddGuestDialogComponent } from './../add-guest-dialog/add-guest-dialog.component';

@Component({
  selector: 'app-guests-list',
  templateUrl: './guests-list.component.html',
  styleUrls: ['./guests-list.component.css']
})
export class GuestsListComponent implements OnInit, OnDestroy {
  public data: Observable<Api.Guest[]>;
  public displayedColumns: string[] = ['name', 'adnotation', 'isTravelling', 'status', 'side', 'actions'];
  public guestsCount: number;
  public emptyGuest = {
    id: 0,
    name: '',
    adnotation: '',
    isTravelling: false,
    status: 0,
    side: 0,
    plannerId: this.authService.getPlannerId()
  };

  constructor(private guestService: Api.GuestClient, public dialog: MatDialog, private authService: AuthService) {}

  openDialog(guest: Api.Guest): void {
    const dialogRef = this.dialog.open(AddGuestDialogComponent, {
      width: '650px',
      data: guest
    });

    dialogRef.afterClosed().subscribe(result => {
      this.guestService
        .post(result)
        .pipe(untilDestroyed(this))
        .subscribe(() => {
          this.retrieveData();
        });
    });
  }

  ngOnInit() {
    this.retrieveData();
  }

  ngOnDestroy() {}

  public retrieveData(): void {
    this.data = this.guestService.getAll().pipe(tap(guests => (this.guestsCount = guests.length)));
  }

  public editGuest(guest: Api.Guest): void {
    this.openDialog(guest);
  }

  public deleteGuest(guest: Api.Guest): void {
    this.guestService.delete(guest);
  }
}
