import { StringUtils } from './string-utils';

describe('StringUtils', () => {
  describe('.removeNewlines', () => {
    it('Should remove new lines', async () => {
      const result = StringUtils.removeNewlines('Hello\n\n\nWorl\rd!');
      expect(result.indexOf('\n')).toEqual(-1);
      expect(result.indexOf('\r')).toEqual(-1);
    });
  });

  describe('.isBlank', () => {
    it('Should return the correct result', async () => {
      const tests = [
        { text: '', result: true },
        { text: ' ', result: true },
        { text: null, result: true },
        { text: false, result: true },
        { text: ' _', result: false },
        { text: 'boogie', result: false },
      ];

      tests.forEach(t => expect(StringUtils.isBlank(t.text)).toEqual(t.result));
    });
  });
});
