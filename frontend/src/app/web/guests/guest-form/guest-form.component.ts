import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.scss'],
})
export class GuestFormComponent implements OnInit {
  @Input() public form!: FormGroup;
  public guestStatusOptions = [
    { value: 1, label: 'Poinformowany' },
    { value: 2, label: 'Zaproszony' },
    { value: 3, label: 'Potwierdzony' },
    { value: 4, label: 'Nie pojawi się' },
  ];

  public guestSideOptions = [
    { value: 1, label: 'Rodzina A' },
    { value: 2, label: 'Rodzina B' },
    { value: 3, label: 'Przyjaciele A' },
    { value: 4, label: 'Przyjaciele B' },
    { value: 5, label: 'Innej' },
  ];
  constructor() {}

  ngOnInit() {}
}
