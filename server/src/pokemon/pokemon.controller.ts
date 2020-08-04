import { Controller, Get, Param, HttpException } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonDTO } from './dto/pokemon.dto';
import { SearchParams } from './dto/search-params.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get('/:name')
  public async get(@Param() params: SearchParams): Promise<PokemonDTO> {
    try {
      return await this.pokemonService.get(params.name);
    } catch (err) {
      this.handleErrors(err);
    }
  }

  private handleErrors(err) {
    if (err.response && err.response.status) {
      switch (err.response.status) {
        case 429:
          throw new HttpException(
            `Exceeded Translation API request limit. Please mock if possible or add FUN_TRANSLATIONS_API_KEY to "./server/.env". Original error: "${err.response.data.error.message}"`,
            err.response.status,
          );
        default:
          throw new HttpException(err.response.data, err.response.status);
      }
    }

    throw err;
  }
}
