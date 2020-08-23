import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'expenseStatus' })
export class ExpenseStatusPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return 'Zaplanowany';
      case 2:
        return 'Podpisany';
      case 3:
        return 'Do opłacenia';
      case 4:
        return 'Opłacony';
      default:
        return 'Brak statusu';
    }
  }
}
