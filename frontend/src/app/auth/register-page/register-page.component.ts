import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { UsersService } from 'src/app/api/services';
import { AuthService } from '../services/auth.service';
import { ValidateForm } from './../../shared/helpers/form.helpers';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit, OnDestroy {
  public form: FormGroup;

  constructor(private usersService: UsersService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(6)]),
    });
  }

  public onSubmit() {
    ValidateForm.validateAllFormFields(this.form);
    if (!this.form.valid) {
      return;
    }
    const model = {
      firstName: this.form.get('firstName').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value,
    };

    this.usersService
      .UsersRegister(model)
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this.authService.logIn(model, 'guests');
      });
  }

  public goToLogin(): void {
    this.router.navigate(['auth', 'login']);
  }

  public ngOnDestroy(): void {}
}
