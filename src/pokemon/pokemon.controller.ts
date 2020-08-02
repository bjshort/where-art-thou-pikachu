import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonDTO } from './pokemon.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get('/:name')
  public async get(@Param('name') name: string): Promise<PokemonDTO> {
    return this.pokemonService.get(name);
  }
}
