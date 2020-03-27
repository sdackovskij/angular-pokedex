import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {


  toggle = true;
  
 arr = [
    {
      "name": "bulbasaur",
      "id": 1,
      "isMy": true,
      "date": "2020-02-25T06:35:30.847Z",
      "damage": 10
    },
    {
      "name": "ivysaur",
      "id": 2,
      "isMy": false,
      "date": "2020-02-27T16:06:31.284Z",
      "damage": 18
    },
    {
      "name": "venusaur",
      "id": 3,
      "isMy": true,
      "damage": 77
    },
    {
      "name": "charmander",
      "id": 4,
      "isMy": false,
      "date": "2020-02-25T06:32:35.579Z",
      "damage": 12
    },
    {
      "name": "charmeleon",
      "id": 5,
      "isMy": true,
      "damage": 33
    },
    {
      "name": "charizard",
      "id": 6,
      "isMy": false,
      "date": "2020-02-25T06:32:33.086Z",
      "damage": 75
    },
    {
      "name": "squirtle",
      "id": 7,
      "isMy": true,
      "damage": 100
    },
    {
      "name": "wartortle",
      "id": 8,
      "isMy": false,
      "damage": 40
    },
    {
      "name": "blastoise",
      "id": 9,
      "isMy": true,
      "date": "2020-02-25T06:33:33.322Z",
      "damage": 60
    },
    {
      "name": "caterpie",
      "id": 10,
      "isMy": false,
      "damage": 15
    },
    {
      "name": "metapod",
      "id": 11,
      "isMy": true,
      "date": "2020-02-25T06:33:31.822Z",
      "damage": 85
    },
    {
      "name": "butterfree",
      "id": 12,
      "isMy": false,
      "damage": 90
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
