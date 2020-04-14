import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchLine = '';

  @Output() getPokemonArr = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public getLine(event?: Event): void {
    this.searchLine = (event.target as HTMLTextAreaElement).value;
  }

  log() {
    this.getPokemonArr.emit(this.searchLine);
  }

}
