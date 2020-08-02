const fs = require('fs');
const Path = require('path');

export class PokedexMock {
  getPokemonByName(name) {
    return this.getFromFileByName(name, './example-get-pokemon-results.json');
  }

  getPokemonSpeciesByName(name) {
    return this.getFromFileByName(name, './example-get-species-results.json');
  }

  private getFromFileByName(name, fileName) {
    const file = Path.join(__dirname, fileName);
    const exampleTranslation = fs.readFileSync(file, {
      encoding: 'utf8',
    });
    const data = JSON.parse(exampleTranslation) as any[];

    switch (name) {
      case 'pikachu': {
        return data[0];
      }
      case 'bulbasaur': {
        return data[1];
      }
      case 'charizard': {
        return data[2];
      }
      default:
        throw new Error('Request failed with status code 404');
    }
  }
}
