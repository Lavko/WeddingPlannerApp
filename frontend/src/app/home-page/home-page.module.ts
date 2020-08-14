import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomeTileComponent } from './home-tile/home-tile.component';



@NgModule({
  declarations: [HomePageComponent, HomeTileComponent],
  imports: [
    CommonModule
  ]
})
export class HomePageModule { }
