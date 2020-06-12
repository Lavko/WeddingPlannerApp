import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-service-provider-form',
  templateUrl: './service-provider-form.component.html',
  styleUrls: ['./service-provider-form.component.scss'],
})
export class ServiceProviderFormComponent implements OnInit {
  @Input() public form!: FormGroup;
  public serviceTypeOptions = [
    { value: 0, label: 'Inne' },
    { value: 1, label: 'Sala' },
    { value: 2, label: 'Kościół' },
    { value: 3, label: 'Urząd stanu cywilnego' },
    { value: 4, label: 'Cukiernia' },
    { value: 5, label: 'Alkohole' },
    { value: 6, label: 'Dekoracje' },
    { value: 7, label: 'Muzyka' },
    { value: 8, label: 'Jedzenie' },
    { value: 9, label: 'Samochód' },
    { value: 10, label: 'Rozrywka' },
    { value: 11, label: 'Doradca' },
  ];
  constructor() {}

  ngOnInit() {}
}
