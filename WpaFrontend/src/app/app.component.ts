import { Component } from '@angular/core';
import { AuthService } from './modules/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService) {}
  title = 'WpaFrontend';

  public logOut() {
    this.authService.logOut();
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
