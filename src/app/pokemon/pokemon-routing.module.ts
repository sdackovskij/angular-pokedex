import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardComponent } from './card/card.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { EditFormDeactivateGuard } from './guards/edit-form-deactivate.guard';


const routes: Routes = [

        {path: '', component: CardComponent},
        {path: 'card-details/:id', component: CardDetailsComponent},
        {path: 'card-details/edit/:id', component: EditFormComponent, canDeactivate: [EditFormDeactivateGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PokemonRoutingModule { }
