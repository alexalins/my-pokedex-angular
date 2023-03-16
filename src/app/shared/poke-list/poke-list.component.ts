import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  listPokemon: any[] = []

  constructor(private pokeApi: PokeApiService) { }

  ngOnInit(): void {
    this.initPokemon();
  }

  initPokemon(): void {
    this.pokeApi.apiListAllPokemon.subscribe(
      res => {
        this.listPokemon = res.results
      }
    )
  }
}
