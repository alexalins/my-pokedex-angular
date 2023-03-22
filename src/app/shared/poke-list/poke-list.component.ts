import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  getListPokemon: any[] = [];
  private setListPokemon: any[] = [];
  apiError: boolean = false;

  constructor(private pokeApi: PokeApiService) { }

  ngOnInit(): void {
    this.initPokemon();
  }

  initPokemon(): void {
    this.pokeApi.apiListAllPokemon.subscribe(
      res => {
        this.setListPokemon = res.results;
        this.getListPokemon = this.setListPokemon;
      },
      error => {
        this.apiError = true;
      }
    )
  }

  getSearch(value: string) {
    const filter = this.setListPokemon.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    })

    this.getListPokemon = filter;
  }
}
