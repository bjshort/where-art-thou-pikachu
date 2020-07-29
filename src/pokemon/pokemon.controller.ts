import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get('/:name')
  public async getDescriptionByName(@Param('name') name: string) {
    return this.pokemonService.getShakespeareanDescription(name);
  }
}
