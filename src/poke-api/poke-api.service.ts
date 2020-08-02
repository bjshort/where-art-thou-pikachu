import { Injectable, HttpService, Inject } from '@nestjs/common';
import { PokemonSearchResultDTO } from './dto/pokemon-search-result.dto';
import { PokemonSpeciesSearchResultDTO } from './dto/pokemon-species-search-result.dto';
import { StringUtils } from '../utils/string-utils';
import { PokemonSpeciesDTO } from './dto/pokemon-species.dto';

@Injectable()
export class PokeApiService {
  constructor(@Inject('POKEDEX') private readonly pokedex: any) {}

  async getPokemon(name: string): Promise<PokemonSearchResultDTO> {
    try {
      return this.pokedex.getPokemonByName(name);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getSpecies(name: string): Promise<PokemonSpeciesDTO> {
    try {
      const result: PokemonSpeciesSearchResultDTO = await this.pokedex.getPokemonSpeciesByName(
        name,
      );

      // TODO: Refactor to allow specification of pokemon version e.g. ruby
      const entry = result.flavor_text_entries.find(entry => {
        return entry.language.name === 'en';
      });

      // Remove all types of newline from string
      const description = StringUtils.removeNewlines(entry.flavor_text);

      return {
        ...result,
        description,
      };
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
