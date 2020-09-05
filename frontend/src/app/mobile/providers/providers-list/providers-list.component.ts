import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.scss'],
})
export class ProvidersListComponent implements OnInit {
  constructor(private routerExtensions: RouterExtensions) {}

  goBack() {
    this.routerExtensions.backToPreviousPage();
  }

  ngOnInit(): void {}
}
