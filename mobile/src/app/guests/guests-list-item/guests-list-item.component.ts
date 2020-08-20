import { Component, Input, OnInit } from '@angular/core';
import { CardView } from '@nstudio/nativescript-cardview';
import { registerElement } from 'nativescript-angular/element-registry';
import { GuestDto } from '~/app/api/models';
registerElement('CardView', () => CardView);

@Component({
  selector: 'ns-guests-list-item',
  templateUrl: './guests-list-item.component.html',
  styleUrls: ['./guests-list-item.component.css'],
})
export class GuestsListItemComponent implements OnInit {
  @Input() public guest: GuestDto;
  public expanded = false;
  public statusCssClass: string;

  constructor() {}

  ngOnInit() {
    this.setStatusCssClass();
  }

  setStatusCssClass() {
    switch (this.guest.status) {
      case 1:
        this.statusCssClass = 'informed-status';
        break;
      case 2:
        this.statusCssClass = 'invited-status';
        break;
      case 3:
        this.statusCssClass = 'confirmed-status';
        break;
      case 4:
        this.statusCssClass = 'cancelled-status';
        break;
      default:
        return '';
    }
  }
}
