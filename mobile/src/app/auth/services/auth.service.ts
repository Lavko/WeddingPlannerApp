import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { getString, remove, setString } from 'tns-core-modules/application-settings';
import { LoginUserDto } from '~/app/api/models';
import { UsersService } from '~/app/api/services';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'token';
  private helper = new JwtHelperService();
  constructor(private usersService: UsersService, private router: Router) {}

  logIn(model: LoginUserDto, route: Array<string>) {
    this.usersService.UsersAuthenticate(model).subscribe((response) => {
      if (response) {
        setString(this.tokenKey, response);
        this.router.navigate(route);
      }
    });
  }

  getToken(): string {
    return getString(this.tokenKey);
  }

  isLoggedIn(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  getPlannerId(): string {
    const tokenDetails = this.helper.decodeToken(this.getToken());
    return tokenDetails.PlannerId;
  }

  logOut(): void {
    remove(this.tokenKey);
    this.router.navigate(['auth/login']);
  }
}
