import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { MainPageComponent } from './main-page/main-page.component';
import { StyleDirective } from './directives/style.directive';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardViewComponent } from './card-view/card-view.component';



@NgModule({
  declarations: [HeaderComponent, CardComponent, MainPageComponent, StyleDirective, CardDetailsComponent, CardViewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    MainPageComponent,
    StyleDirective,
    CardDetailsComponent,
    CardViewComponent
  ]
})
export class PokemonModule { }
