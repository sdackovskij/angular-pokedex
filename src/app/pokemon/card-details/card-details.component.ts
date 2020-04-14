import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PokemonServiceService, Pokemon } from '../services/pokemon-service.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
     this.pokemon = this.pokemonService.getById(+params.id)[0];
    });
  }

}
