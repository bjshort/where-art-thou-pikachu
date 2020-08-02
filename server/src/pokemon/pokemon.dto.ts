export interface PokemonDTO {
  id: number;
  name: string;
  description: {
    original: string;
    shakespeare: string;
  };
  imageUrl: string;
}
