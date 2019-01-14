import { expect } from 'chai';
import capitalize from '../../utils/capitalize';

describe('', () => {
  it('capitalizes a string', () => {
    const word = 'teststring';
    const expectedResult = 'TESTSTRING'
    expect(capitalize(word)).to.deep.equal(expectedResult);
  });
})

