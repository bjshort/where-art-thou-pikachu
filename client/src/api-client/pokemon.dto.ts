export interface PokemonDTO {
  id: number;
  name: string;
  description: {
    original: string;
    shakespeare: string;
  };
  imageUrl: string;
  height: string;
  weight: string;
  exp: number;
}
