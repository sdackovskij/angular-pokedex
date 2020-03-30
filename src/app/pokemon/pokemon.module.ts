import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { MainPageComponent } from './main-page/main-page.component';
import { StyleDirective } from './directives/style.directive';



@NgModule({
  declarations: [HeaderComponent, CardComponent, MainPageComponent, StyleDirective],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    MainPageComponent,
    StyleDirective
  ]
})
export class PokemonModule { }
