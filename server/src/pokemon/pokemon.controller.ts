import { Controller, Get, Param, HttpException } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonDTO } from './pokemon.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get('/:name')
  public async get(@Param('name') name: string): Promise<PokemonDTO> {
    try {
      return await this.pokemonService.get(name);
    } catch (err) {
      // Would rethink this in production but for now just rethrow
      if (err.response && err.response.status) {
        throw new HttpException(err.response.data, err.response.status);
      }
      throw err;
    }
  }
}
