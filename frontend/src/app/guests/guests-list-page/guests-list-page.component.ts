import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { GuestDto } from 'src/app/api/models';
import { GuestService } from 'src/app/api/services';
import { AuthService } from 'src/app/auth/services/auth.service';
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

  constructor(private guestService: GuestService, private authService: AuthService, public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.retrieveData();
  }

  private retrieveData(): void {
    const plannerId = this.authService.getPlannerId();

    this.guestService.GuestGetAll(+plannerId).subscribe((guests) => {
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

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.guestService
        .GuestPost({ plannerId: this.authService.getPlannerId(), createGuestDto: result })
        .pipe(untilDestroyed(this))
        .subscribe(() => {
          this.retrieveData();
        });
    });
  }

  public openEditDialog(guest: GuestDto): void {
    const dialogRef = this.dialog.open(EditGuestDialogComponent, {
      width: '650px',
      data: guest,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.guestService
        .GuestPut({ plannerId: this.authService.getPlannerId(), updateGuestDto: result })
        .pipe(untilDestroyed(this))
        .subscribe(() => {
          this.retrieveData();
        });
    });
  }

  public ngOnDestroy(): void {}
}
