export interface PokemonSpeciesSearchResultDTO {
  name: string;
  flavor_text_entries: PokemonSpeciesFlavourText[];
}

export interface PokemonSpeciesFlavourText {
  flavor_text: string;
  language: {
    name: string;
  };
  version: {
    name: string;
  };
}
