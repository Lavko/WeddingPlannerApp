import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'serviceType' })
export class ServiceTypePipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return 'Sala';
      case 2:
        return 'Kościół';
      case 3:
        return 'Urząd stanu cywilnego';
      case 4:
        return 'Cukiernia';
      case 5:
        return 'Alkohole';
      case 6:
        return 'Dekoracje';
      case 7:
        return 'Muzyka';
      case 8:
        return 'Jedzenie';
      case 9:
        return 'Samochód';
      case 10:
        return 'Rozrywka';
      case 11:
        return 'Doradca';
      default:
        return 'Inne';
    }
  }
}
