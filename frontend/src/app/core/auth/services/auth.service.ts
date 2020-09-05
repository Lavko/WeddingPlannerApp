import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserDto } from '@core/api/models';
import { loginAction, logoutAction } from '@core/store/actions/auth.actions';
import { AppState } from '@core/store/state/app.state';
import { userSelectors } from '@core/store/state/user.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private store: Store<AppState>) {}

  public logIn(model: LoginUserDto, route: string) {
    this.store.dispatch(loginAction(model));
  }

  public getToken(): Observable<string> {
    return userSelectors.getToken(this.store);
  }

  public isLoggedIn(): Observable<boolean> {
    return this.getToken().pipe(
      map((token) => {
        return token ? true : false;
      })
    );
  }

  public getPlannerId(): Observable<number> {
    return this.store.select((store) => store.user.plannerId);
  }

  public logOut(): void {
    this.store.dispatch(logoutAction());
    this.router.navigate(['auth/login']);
  }
}
