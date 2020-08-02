export class PokeApiServiceMock {
  async getPokemon() {
    return {
      id: 0,
      name: 'Testasaurus',
      species: {
        name: 'Testasaurus',
      },
      sprites: {
        front_default: 'https://images.com',
      },
    };
  }

  async getSpecies() {
    return {
      description: 'A strange bird with a tedious yet essential nature.',
    };
  }
}
