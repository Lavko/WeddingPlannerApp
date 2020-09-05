import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent implements OnInit {
  public canGoBack = false;
  constructor(private routerExtensions: RouterExtensions) {}

  goBack() {
    this.routerExtensions.backToPreviousPage();
  }

  ngOnInit(): void {
    this.canGoBack = this.routerExtensions.canGoBackToPreviousPage();
  }
}
