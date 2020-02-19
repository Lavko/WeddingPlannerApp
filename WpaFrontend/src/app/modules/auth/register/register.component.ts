import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Api } from '../../api/api';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  public form: FormGroup;

  constructor(private usersService: Api.UsersClient, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  public onSubmit() {
    const model = {
      firstName: this.form.get('firstName').value,
      lastName: this.form.get('lastName').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };

    this.usersService
      .register(model)
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this.authService.logIn(model, 'planner');
      });
  }

  public ngOnDestroy(): void {}
}
