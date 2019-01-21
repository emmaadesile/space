import { expect } from 'chai';
import isEmpty from '../../src/utils/isEmpty';

describe('Test for empty arguments', () => {

  it('return true for an empty object', () => {
    const emptyObject = {};
    expect(isEmpty(emptyObject)).to.deep.equal(true);
  });

  it('return true for an empty string', () => {
    expect(isEmpty('')).to.deep.equal(true);
  });

  it('returns true for Undefined arguments', () => {
    expect(isEmpty()).to.deep.equal(true);
  });

  it('returns false is there are arguments', () => {
    expect(isEmpty('args')).to.deep.equal(false);
  });

  it('returns true for null', () => {
    expect(isEmpty(null)).to.deep.equal(true);
  });
});
