import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit {
  @Input() public form!: FormGroup;

  public colorOptions = [
    { value: 4, label: 'Niebieski' },
    { value: 0, label: 'Szary' },
    { value: 1, label: 'Czerwony' },
    { value: 2, label: 'Żółty' },
    { value: 3, label: 'Zielony' },
    { value: 5, label: 'Biały' },
  ];
  constructor() {}

  ngOnInit() {}
}
