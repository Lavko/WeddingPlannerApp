import { Component, OnInit } from '@angular/core';
import { UsersService } from '~/app/api/services';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'ns-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  email: string;
  firstName: string;
  password: string;

  constructor(private usersService: UsersService, private authService: AuthService) {}

  ngOnInit() {}

  public onSubmit() {
    console.log({ email: this.email, firstName: this.firstName, password: this.password });
    this.usersService
      .UsersRegister({ email: this.email, firstName: this.firstName, password: this.password })
      .subscribe(() => this.authService.logIn({ email: this.email, password: this.password }, ['/home']));
  }
}
