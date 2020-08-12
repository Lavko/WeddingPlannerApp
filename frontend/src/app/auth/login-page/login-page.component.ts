import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    console.log('bla');
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    const model = { email: this.form.get('email').value, password: this.form.get('password').value };
    this.authService.logIn(model, 'guests');
  }

  public goToRegister(): void {
    this.router.navigate(['auth', 'register']);
  }
}
