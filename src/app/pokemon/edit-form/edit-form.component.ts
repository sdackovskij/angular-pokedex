import { Component, OnInit, ViewChild } from '@angular/core';
import { Pokemon, PokemonServiceService } from '../services/pokemon-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  form: FormGroup;

  buttonEdit = false;

  pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonServiceService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.pokemon = this.pokemonService.getById(+params.id)[0];
    });

    this.form = new FormGroup({
      name: new FormControl(this.pokemon.name),
      damage: new FormControl(this.pokemon.damage),
      date: new FormControl(this.pokemon.date)
    });
  }

  public wasEdit(): boolean {
    if (this.buttonEdit) {
      alert('Information saved!');
      return true;
    }
    return false;
  }

  submit(): void {
    this.buttonEdit = true;
    this.route.params.subscribe((params: Params) => {
      this.pokemonService.getById(+params.id)[0].name = this.form.value.name;
      this.pokemonService.getById(+params.id)[0].damage = this.form.value.damage;
      this.pokemonService.getById(+params.id)[0].date = this.form.value.date;
    });
    this.router.navigate(['/card-details', this.pokemon.id]);
  }

}
