import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginUserDto } from 'src/app/api/models';
import { loginAction } from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'token';
  constructor(private router: Router, private store: Store<AppState>) {}

  public logIn(model: LoginUserDto, route: string) {
    this.store.dispatch(loginAction(model));
  }

  public getToken(): Observable<string> {
    this.store.select((store) => console.log(store));
    return this.store.select((store) => {
      console.log(store);
      return store.auth.token;
    });
  }

  public isLoggedIn(): Observable<boolean> {
    return this.getToken().pipe(
      map((token) => {
        if (token) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  public getPlannerId(): Observable<number> {
    return this.store.select((store) => store.auth.plannerId);
  }

  public logOut(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['auth/login']);
  }
}
