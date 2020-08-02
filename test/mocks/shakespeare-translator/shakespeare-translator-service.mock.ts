const fs = require('fs');
const Path = require('path');

export class ShakespeareTranslatorServiceMock {
  translate(text: string) {
    const translations = fs.readFileSync(
      Path.join(__dirname, './pokemon-translations.json'),
      {
        encoding: 'utf8',
      },
    );

    const data = JSON.parse(translations) as any[];
    const translation = data.find(t => t.contents.text == text);

    if (!translation) {
      throw new Error(
        `Translation for "${text}" does not exist in test data. Please update test data or enable real API calls.`,
      );
    }

    return translation;
  }
}
