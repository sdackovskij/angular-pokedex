import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../services/pokemon-service.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(public PokemonServiceService: PokemonServiceService) { }

  ngOnInit(): void { }
 toggle = true;
  
  changeToggle(): void {
    this.toggle = !this.toggle;
    this.PokemonServiceService.setToggle(this.toggle);
  }
  
  

}
