import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Api } from '../../api/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey: string = 'token';
  private tokenExpire: string = 'token-expire';
  private userProfileKey: string = 'user-profile';
  private helper = new JwtHelperService();
  constructor(private usersService: Api.UsersClient, private toastrService: ToastrService, private router: Router) {}

  public logIn(model: Api.AuthenticateModel, route: string) {
    this.usersService.authenticate(model).subscribe(response => {
      if (response) {
        localStorage.setItem(this.tokenKey, response);
        this.toastrService.success('Logged in.');
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
}
