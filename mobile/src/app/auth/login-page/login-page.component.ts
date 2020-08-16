import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'ns-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  public onSubmit() {
    console.log('submit');
    const model = { email: this.email, password: this.password };
    console.log(model);
    this.authService.logIn(model, ['orders', 'newOrder']);
  }
}
