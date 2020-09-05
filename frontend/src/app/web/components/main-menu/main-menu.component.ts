import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  public isOpened: boolean;
  public menuItems = [
    { icon: 'reorder', label: 'Podsumowanie', route: 'home' },
    { icon: 'event', label: 'Kalendarz', route: 'events' },
    { icon: 'people_alt', label: 'Goście', route: 'guests' },
    { icon: 'account_balance', label: 'Finanse', route: 'budget' },
    { icon: 'style', label: 'Wizytówki', route: 'serviceProviders' },
  ];
  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private authService: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
    this.isOpened = !this.mobileQuery.matches;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  ngOnInit() {}

  public isLoggedIn(): Observable<boolean> {
    return this.authService.isLoggedIn();
  }

  public logOut(): void {
    this.authService.logOut();
  }
}
