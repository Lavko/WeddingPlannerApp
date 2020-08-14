import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { GuestDto } from 'src/app/api/models';
import { getGuestsAction } from 'src/app/store/actions/guests.actions';
import { AppState } from 'src/app/store/state/app.state';
import { guestsSelectors } from 'src/app/store/state/guests.state';
import { AddGuestDialogComponent } from './../add-guest-dialog/add-guest-dialog.component';
import { EditGuestDialogComponent } from './../edit-guest-dialog/edit-guest-dialog.component';

@Component({
  selector: 'app-guests-list-page',
  templateUrl: './guests-list-page.component.html',
  styleUrls: ['./guests-list-page.component.scss'],
})
export class GuestsListPageComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['name', 'status', 'side', 'isTravelling', 'adnotation'];
  public dataSource: MatTableDataSource<GuestDto>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public dialog: MatDialog, private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.store.dispatch(getGuestsAction());
    this.retrieveData();
  }

  private retrieveData(): void {
    guestsSelectors.getGuests(this.store).subscribe((guests) => {
      this.dataSource = new MatTableDataSource(guests);
      this.dataSource.sort = this.sort;
    });
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public openCreateDialog(): void {
    const dialogRef = this.dialog.open(AddGuestDialogComponent, {
      width: '650px',
    });
  }

  public openEditDialog(guest: GuestDto): void {
    const dialogRef = this.dialog.open(EditGuestDialogComponent, {
      width: '650px',
      data: guest,
    });
  }

  public ngOnDestroy(): void {}
}
