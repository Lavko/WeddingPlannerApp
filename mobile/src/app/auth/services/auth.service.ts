import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { getString, remove } from 'tns-core-modules/application-settings';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'token';
  private helper = new JwtHelperService();
  constructor(private router: Router) {}

  public logIn(model: any, route: string[]) {
    // this.usersService.UsersAuthenticate(model).subscribe((response) => {
    //   if (response) {
    //     setString(this.tokenKey, response);
    //     this.router.navigate(route);
    //   }
    // });
  }
  public getToken(): string {
    return getString(this.tokenKey);
  }

  public isLoggedIn(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  public logOut(): void {
    remove(this.tokenKey);
    this.router.navigate(['auth/login']);
  }
}
