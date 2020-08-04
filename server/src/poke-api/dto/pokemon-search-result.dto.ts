export interface PokemonSearchResultDTO {
  id: number;
  name: string;
  species: { name: string; url: string };
  sprites: {
    front_default: string;
    back_default: string;
  };
  height: number;
  weight: number;

  base_experience: number;
}
