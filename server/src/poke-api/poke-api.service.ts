import { Injectable, Inject } from '@nestjs/common';
import { PokemonSearchResultDTO } from './dto/pokemon-search-result.dto';
import { PokemonSpeciesSearchResultDTO } from './dto/pokemon-species-search-result.dto';
import { StringUtils } from '../utils/string-utils';
import { PokemonSpeciesDTO } from './dto/pokemon-species.dto';

@Injectable()
export class PokeApiService {
  constructor(@Inject('POKEDEX') private readonly pokedex: any) {}

  /**
   * Uses the PokeApi to look up a Pokemon by name
   *
   * @param {string} name
   * @returns {Promise<PokemonSearchResultDTO>}
   * @memberof PokeApiService
   */
  async getPokemon(name: string): Promise<PokemonSearchResultDTO> {
    return this.pokedex.getPokemonByName(name);
  }

  /**
   * Uses the PokeApi to lookup a Pokemon species by species name (usually the same as the Pokemon name).
   *
   * @param {string} name
   * @returns {Promise<PokemonSpeciesDTO>}
   * @memberof PokeApiService
   */
  async getSpecies(name: string): Promise<PokemonSpeciesDTO> {
    const result: PokemonSpeciesSearchResultDTO = await this.pokedex.getPokemonSpeciesByName(
      name,
    );

    // TODO: Allow specification of pokemon version e.g. ruby
    const entry = result.flavor_text_entries.find(entry => {
      return entry.language.name === 'en';
    });

    // Remove all types of newline from string
    const description = StringUtils.removeNewlines(entry.flavor_text);

    return {
      ...result,
      description,
    };
  }
}
