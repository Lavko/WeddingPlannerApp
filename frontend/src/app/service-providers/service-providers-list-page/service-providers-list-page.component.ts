import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ServiceProviderDto } from 'src/app/api/models';
import { ServiceProviderService } from 'src/app/api/services';
import { AddServiceProviderDialogComponent } from '../add-service-provider-dialog/add-service-provider-dialog.component';
import { AuthService } from './../../auth/services/auth.service';
import { EditServiceProviderDialogComponent } from './../edit-service-provider-dialog/edit-service-provider-dialog.component';

@Component({
  selector: 'app-service-providers-list-page',
  templateUrl: './service-providers-list-page.component.html',
  styleUrls: ['./service-providers-list-page.component.scss'],
})
export class ServiceProvidersListPageComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['name', 'type', 'phone', 'email', 'address'];
  public dataSource: MatTableDataSource<ServiceProviderDto>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private serviceProviderService: ServiceProviderService,
    private authService: AuthService,
    public dialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.retrieveData();
  }

  private retrieveData(): void {
    const plannerId = this.authService.getPlannerId();

    this.serviceProviderService.ServiceProviderGetAll().subscribe((providers) => {
      this.dataSource = new MatTableDataSource(providers);
      this.dataSource.sort = this.sort;
    });
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public openCreateDialog(): void {
    const dialogRef = this.dialog.open(AddServiceProviderDialogComponent, {
      width: '650px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.serviceProviderService
        .ServiceProviderPost(result)
        .pipe(untilDestroyed(this))
        .subscribe(() => {
          this.retrieveData();
        });
    });
  }

  public openEditDialog(provider: ServiceProviderDto): void {
    const dialogRef = this.dialog.open(EditServiceProviderDialogComponent, {
      width: '650px',
      data: provider,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'remove') {
        this.serviceProviderService
          .ServiceProviderDelete(provider.id)
          .pipe(untilDestroyed(this))
          .subscribe(() => {
            this.retrieveData();
          });
      } else {
        this.serviceProviderService
          .ServiceProviderPut(result)
          .pipe(untilDestroyed(this))
          .subscribe(() => {
            this.retrieveData();
          });
      }
    });
  }

  public ngOnDestroy(): void {}
}
