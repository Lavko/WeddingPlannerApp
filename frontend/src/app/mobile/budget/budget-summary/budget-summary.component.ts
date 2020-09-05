import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-budget-summary',
  templateUrl: './budget-summary.component.html',
  styleUrls: ['./budget-summary.component.scss'],
})
export class BudgetSummaryComponent implements OnInit {
  constructor(private routerExtensions: RouterExtensions) {}

  goBack() {
    this.routerExtensions.backToPreviousPage();
  }

  ngOnInit(): void {}
}
