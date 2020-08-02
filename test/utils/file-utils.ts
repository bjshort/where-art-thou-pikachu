const fs = require('fs');
const Path = require('path');

/* Util function - Useful for collecting mock search results */
export function appendToFile(fileName: string, result: any) {
  const file = Path.join(__dirname, fileName);
  const exampleTranslation = fs.readFileSync(file, {
    encoding: 'utf8',
  });
  const data = JSON.parse(exampleTranslation) as [];

  fs.writeFileSync(file, JSON.stringify([...data, result]));
}
