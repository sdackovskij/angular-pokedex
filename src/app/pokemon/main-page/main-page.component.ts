import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../services/pokemon-service.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  toggle = true;

  constructor(public PokemonService: PokemonServiceService) { }

  ngOnInit(): void { }

  changeToggle(): void {
    this.toggle = !this.toggle;
    this.PokemonService.setToggle(this.toggle);
  }
}
