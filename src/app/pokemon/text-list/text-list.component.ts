import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.scss']
})


export class TextListComponent implements OnInit {

  onButtonConsole() {
    console.log(`Покемон ${this.pokemon.name} был пойман/отпущен`)
  }

 

  @Input() pokemon: {
    name: string
    id: number
    isMy: boolean
    date?: string
    damage: number
  }

  constructor() { }

  ngOnInit(): void {
    
    
  
  }

}
