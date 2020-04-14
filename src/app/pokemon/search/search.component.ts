import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PokemonServiceService, Pokemon } from '../services/pokemon-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public PokemonServiceService: PokemonServiceService) { }

  ngOnInit(): void {
  }


  public getLine(event?: Event): void{
    this.PokemonServiceService.searchLine = (<HTMLTextAreaElement>event.target).value;
  }

}
