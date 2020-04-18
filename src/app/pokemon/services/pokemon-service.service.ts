import { Injectable } from '@angular/core';


export interface Pokemon {
  name: string;
  isMy: boolean;
  id: number;
  date?: string;
  damage: number;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor() { }

  toggle: boolean;

  searchLine: string;

  pokemonArr = [
    {
      name: 'bulbasaur',
      id: 1,
      isMy: true,
      date: '2020-04-17',
      damage: 10
    },
    {
      name: 'ivysaur',
      id: 2,
      isMy: false,
      date: '2020-04-17',
      damage: 18
    },
    {
      name: 'venusaur',
      id: 3,
      isMy: true,
      date: '2020-04-17',
      damage: 77
    },
    {
      name: 'charmander',
      id: 4,
      isMy: false,
      date: '2020-04-17',
      damage: 12
    },
    {
      name: 'charmeleon',
      id: 5,
      isMy: true,
      date: '2020-04-17',
      damage: 33
    },
    {
      name: 'charizard',
      id: 6,
      isMy: false,
      date: '2020-04-17',
      damage: 75
    },
    {
      name: 'squirtle',
      id: 7,
      isMy: true,
      date: '2020-04-17',
      damage: 100
    },
    {
      name: 'wartortle',
      id: 8,
      isMy: false,
      date: '2020-04-17',
      damage: 40
    },
    {
      name: 'blastoise',
      id: 9,
      isMy: true,
      date: '2020-04-17',
      damage: 60
    },
    {
      name: 'caterpie',
      id: 10,
      isMy: false,
      date: '2020-04-17',
      damage: 15
    },
    {
      name: 'metapod',
      id: 11,
      isMy: true,
      date: '2020-04-17',
      damage: 85
    },
    {
      name: 'butterfree',
      id: 12,
      isMy: false,
      date: '2020-04-17',
      damage: 90
    }
  ];

  public getToggle(): boolean {
    if (this.toggle === undefined) {
      return true;
    }
    return this.toggle;
  }

  public setToggle(tgl: boolean): void {
    this.toggle = tgl;
  }

  public getAll() {
    return this.pokemonArr;
  }

  public filter(inputValue: string) {
    return this.pokemonArr.filter((pokemon) => {
      return pokemon.name === inputValue;
    });
  }

  public getById(inputValue: number) {
    return this.pokemonArr.filter((pokemon) => {
      return pokemon.id === Number(inputValue);
    });
  }
}
