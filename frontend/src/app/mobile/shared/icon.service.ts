import { Injectable } from '@angular/core';
import { IconsEnum } from './icons.enum';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  getIcon(type: IconsEnum) {
    return String.fromCharCode(this.getIconCode(type));
  }

  getIconCode(type: IconsEnum) {
    switch (type) {
      case IconsEnum.Budget:
        return 0xe93c;
      case IconsEnum.Calendar:
        return 0xe953;
      case IconsEnum.Guests:
        return 0xe972;
      case IconsEnum.Providers:
        return 0xe944;
      case IconsEnum.NewGuest:
        return 0xe973;
      case IconsEnum.Heart:
        return 0xe9da;
      case IconsEnum.Bell:
        return 0xe951;
    }
  }
}
