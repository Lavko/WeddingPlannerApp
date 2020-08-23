import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss'],
})
export class ExpenseFormComponent implements OnInit {
  @Input() public form!: FormGroup;
  @Input() public serviceProviderOptions!: { value: number; label: string }[];
  public expenseStatusOptions = [
    { value: 1, label: 'Zaplanowany' },
    { value: 2, label: 'Potwierdzony' },
    { value: 3, label: 'Zaliczkowany' },
    { value: 4, label: 'Opłacony' },
  ];
  constructor() {}

  ngOnInit() {}
}
