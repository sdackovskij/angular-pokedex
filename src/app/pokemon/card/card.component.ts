import { Component, OnInit, Input } from '@angular/core';
import { PokemonServiceService, Pokemon } from '../services/pokemon-service.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  constructor(public PokemonServiceService: PokemonServiceService) {}

  ngOnInit(): void {
    this.getPokemonArr("");
  }

  pokemonArr: Pokemon[]; 
  
  public getPokemonArr(str: string){
    
    if(str != ""){
      this.pokemonArr = this.PokemonServiceService.filter(str);

    } else{
      this.pokemonArr = this.PokemonServiceService.getAll();
    }
    
    
  } 

  public getToggle(): boolean {
    return this.PokemonServiceService.getToggle();
  }

  public cardType(): string {
    let cardTypeClass: string;
    this.getToggle() ? cardTypeClass = 'card' : cardTypeClass = 'text-list';
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
