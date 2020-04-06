import { Component, OnInit, Input } from '@angular/core';
import { PokemonServiceService } from '../services/pokemon-service.service';

interface Pokemon {
  name: string;
  isMy: boolean;
  id: number;
  date?: string;
  damage: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() toggleButton: boolean;

  constructor(public PokemonServiceService: PokemonServiceService) {}

  ngOnInit(): void {}

  pokemonArr: Pokemon[] = this.PokemonServiceService.getAll();

  public cardType(): string {
    let cardTypeClass: string;
    this.toggleButton ? cardTypeClass = 'card' : cardTypeClass = 'text-list';
    return cardTypeClass;
  }

  public buttonName(pokemon: Pokemon): string {
    if (pokemon.isMy) {
      return 'let go';
    } else { return 'catch'; }
  }

  public clickButton(pokemon: Pokemon): void {
    pokemon.isMy = !pokemon.isMy;
    this.buttonName(pokemon);
    console.log(`Pokemon ${pokemon.name} is catched: ${pokemon.isMy}`);
  }
}
