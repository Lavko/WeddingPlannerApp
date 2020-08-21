import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class ValidateForm {
  public static validateAllFormFields(formGroup: FormGroup | FormArray): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormArray) {
        control.markAllAsTouched();
      } else if (control instanceof FormGroup) {
        control.markAllAsTouched();
      }
    });
  }
}
