import { expect } from 'chai';
import stripWhiteSpace from '../../src/utils/stripWhiteSpace';

it('removes white space form a string', () => {
  const word = 'We are killing it tonight';
  const expectedResult = 'Wearekillingittonight';
  expect(stripWhiteSpace(word)).to.deep.equal(expectedResult);
});
