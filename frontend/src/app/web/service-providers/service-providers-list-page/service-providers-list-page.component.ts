import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { ServiceProviderDto } from 'src/app/core/api/models';
import { getServiceProvidersAction } from 'src/app/core/store/actions/serviceProviders.actions';
import { AppState } from 'src/app/core/store/state/app.state';
import { serviceProvidersSelectors } from 'src/app/core/store/state/serviceProviders.state';
import { userSelectors } from 'src/app/core/store/state/user.state';
import { AddServiceProviderDialogComponent } from '../add-service-provider-dialog/add-service-provider-dialog.component';
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

  constructor(public dialog: MatDialog, private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.store.dispatch(getServiceProvidersAction());
    this.retrieveData();
  }

  private retrieveData(): void {
    const plannerId = userSelectors.getPlannerId(this.store);

    serviceProvidersSelectors.getServiceProviders(this.store).subscribe((providers) => {
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
  }

  public openEditDialog(provider: ServiceProviderDto): void {
    const dialogRef = this.dialog.open(EditServiceProviderDialogComponent, {
      width: '650px',
      data: provider,
    });
  }

  public ngOnDestroy(): void {}
}
