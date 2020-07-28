import { Injectable, HttpService, Inject } from '@nestjs/common';
import { PokemonSearchResultDTO } from './pokemon-search-result.dto';
import { PokemonSpeciesSearchResultDTO } from './pokemon-species-search-result.dto';

@Injectable()
export class PokeApiService {
  constructor(@Inject('POKEDEX') private readonly pokedex: any) {}

  async getPokemonDescriptionByName(name: string) {
    const pokemon = await this.getPokemon(name);
    const species = await this.getSpecies(pokemon.species.name);

    // TODO: Refactor to allow specification of version
    const entry = species.flavor_text_entries.find(entry => {
      return entry.language.name === 'en';
    });

    return entry.flavor_text;
  }

  async getPokemon(name: string): Promise<PokemonSearchResultDTO> {
    try {
      return this.pokedex.getPokemonByName(name);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getSpecies(name: string): Promise<PokemonSpeciesSearchResultDTO> {
    try {
      return this.pokedex.getPokemonSpeciesByName(name);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getVersions(): Promise<any> {
    try {
      return this.pokedex.getVersionsList();
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
