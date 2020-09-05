import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  constructor(private routerExtensions: RouterExtensions) {}

  goBack() {
    this.routerExtensions.backToPreviousPage();
  }

  ngOnInit(): void {}
}
