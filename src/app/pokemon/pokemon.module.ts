import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TextListComponent } from './text-list/text-list.component';



@NgModule({
  declarations: [HeaderComponent, CardComponent, MainPageComponent, TextListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    MainPageComponent
  ]
})
export class PokemonModule { }
