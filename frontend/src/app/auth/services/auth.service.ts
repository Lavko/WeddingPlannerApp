import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { LoginUserDto } from 'src/app/api/models';
import { UsersService } from 'src/app/api/services';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'token';
  private tokenExpire = 'token-expire';
  private helper = new JwtHelperService();
  constructor(private usersService: UsersService, private toastrService: ToastrService, private router: Router) {}

  public logIn(model: LoginUserDto, route: string) {
    this.usersService.UsersAuthenticate(model).subscribe((response) => {
      if (response) {
        localStorage.setItem(this.tokenKey, response);
        this.router.navigate([route]);
      }
    });
  }
  public getToken(): string {
    return localStorage.getItem(this.tokenKey);
  }

  public isLoggedIn(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  public getPlannerId(): string {
    const tokenDetails = this.helper.decodeToken(this.getToken());
    return tokenDetails.PlannerId;
  }

  public logOut(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['auth/login']);
  }
}
