const fs = require('fs');
const Path = require('path');

export class HttpServiceMock {
  post(path: string) {
    const exampleTranslation = fs.readFileSync(
      Path.join(__dirname, './example-response.json'),
      {
        encoding: 'utf8',
      },
    );
    const data = JSON.parse(exampleTranslation);
    const mockApiResponse = { data };

    return { toPromise: async () => mockApiResponse };
  }
}
