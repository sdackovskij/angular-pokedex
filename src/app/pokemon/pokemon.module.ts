import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { MainPageComponent } from './main-page/main-page.component';
import { StyleDirective } from './directives/style.directive';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardViewComponent } from './card-view/card-view.component';
import { SearchComponent } from './search/search.component';
import { PokemonServiceService } from './services/pokemon-service.service';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { EditFormComponent } from './edit-form/edit-form.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    MainPageComponent,
    StyleDirective,
    CardDetailsComponent,
    CardViewComponent,
    SearchComponent,
    EditFormComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    MainPageComponent,
    StyleDirective,
    CardDetailsComponent,
    CardViewComponent,
    SearchComponent,
    EditFormComponent
  ],
  providers: [
    PokemonServiceService
  ]
})
export class PokemonModule { }
