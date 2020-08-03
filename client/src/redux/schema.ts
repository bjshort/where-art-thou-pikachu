import { schema, Schema } from 'normalizr';
import { PokemonDTO } from '../api-client/pokemon.dto';
export interface SchemaDefiniton {
  pokemon: Schema<PokemonDTO>;
}

const SCHEMA: SchemaDefiniton = {
  pokemon: new schema.Entity('pokemon'),
};

export default SCHEMA;
