import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})


export class CardComponent implements OnInit {

  

  onButton(){
    console.log(`Покемон ${this.pokemon.name} был пойман/отпущен`)
  }

  @Input() pokemon: {name: string
  id: number
  isMy: boolean
  date ?: string
  damage: number};
  
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
