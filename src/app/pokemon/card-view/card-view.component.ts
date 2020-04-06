import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

interface Pokemon {
  name: string;
  isMy: boolean;
  id: number;
  date?: string;
  damage: number;
}

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardViewComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Input() cardType: string;
  @Input() buttonName: string;

  @Output() clickButton = new EventEmitter<Pokemon>();
  change(pokemon: Pokemon) {
    this.clickButton.emit(pokemon);
  }

  constructor() { }

  ngOnInit(): void {

  }

}
