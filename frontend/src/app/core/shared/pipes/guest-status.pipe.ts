import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'guestStatus' })
export class GuestStatusPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return 'Poinformowany';
      case 2:
        return 'Zaproszony';
      case 3:
        return 'Potwierdzony';
      case 4:
        return 'Nie pojawi się';
      default:
        return 'Brak statusu';
    }
  }
}
