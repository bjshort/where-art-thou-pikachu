import { Injectable } from '@nestjs/common';
import { PokeApiService } from '../poke-api/poke-api.service';
import { ShakespeareTranslatorService } from '../shakespeare-translator/shakespeare-translator.service';

@Injectable()
export class PokemonService {
  constructor(
    private readonly pokeApiService: PokeApiService,
    private readonly shakrespeareTranslatorService: ShakespeareTranslatorService,
  ) {}

  async getShakespeareanDescription(name: string) {
    const originalDescription = await this.pokeApiService.getPokemonDescriptionByName(
      name,
    );

    const shakespeareanDescription = await this.shakrespeareTranslatorService.translate(
      originalDescription,
    );

    return shakespeareanDescription;
  }
}
