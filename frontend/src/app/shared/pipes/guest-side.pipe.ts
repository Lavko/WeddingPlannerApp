import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'guestSide' })
export class GuestSidePipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return 'Rodzina A';
      case 2:
        return 'Rodzina B';
      case 3:
        return 'Przyjaciele A';
      case 4:
        return 'Przyjaciele B';
      case 5:
        return 'Inna';
      default:
        return 'Brak informacji';
    }
  }
}
