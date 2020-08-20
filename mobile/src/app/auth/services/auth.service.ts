import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginUserDto } from '~/app/api/models';
import { loginAction, logoutAction } from './../../store/actions/auth.actions';
import { AppState } from './../../store/state/app.state';
import { userSelectors } from './../../store/state/user.state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'token';
  private helper = new JwtHelperService();
  constructor(private store: Store<AppState>, private router: Router) {}

  logIn(model: LoginUserDto, route: Array<string>) {
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
    this.router.navigate(['/auth']);
  }
}
