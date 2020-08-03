import { Injectable } from '@nestjs/common';
import { PokeApiService } from '../poke-api/poke-api.service';
import { ShakespeareTranslatorService } from '../shakespeare-translator/shakespeare-translator.service';
import { StringUtils } from 'src/utils/string-utils';
import { PokemonDTO } from './pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(
    private readonly pokeApiService: PokeApiService,
    private readonly shakrespeareTranslatorService: ShakespeareTranslatorService,
  ) {}

  async get(name: string): Promise<PokemonDTO> {
    const pokemon = await this.pokeApiService.getPokemon(name);
    const species = await this.pokeApiService.getSpecies(pokemon.species.name);

    const shakespeareanDescription = await this.shakrespeareTranslatorService.translate(
      species.description,
    );

    return {
      id: pokemon.id,
      name: pokemon.name,
      description: {
        original: species.description,
        shakespeare: shakespeareanDescription.contents.translated,
      },
      imageUrl: pokemon.sprites.front_default,
      height: (pokemon.height / 3.048).toFixed(2) // Need to move this to utility func,
      weight: (pokemon.weight / 4.536).toFixed(2) // Need to move this to utility func,
    };
  }
}
