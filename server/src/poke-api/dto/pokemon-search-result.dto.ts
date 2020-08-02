export interface PokemonSearchResultDTO {
  id: number;
  name: string;
  species: { name: string; url: string };
  sprites: {
    front_default: string;
    back_default: string;
  };
}
