import { expect } from 'chai';
import capitalizeFirstLetter from '../../src/utils/capitalizeFirstLetter';

it('capitalizes the first letter of a word', () => {
  const word = 'sheldon';
  expect(capitalizeFirstLetter(word)).to.deep.equal('Sheldon');
});

it('returns an error for non-string characters', () => {
  const word = 12345;
  expect(capitalizeFirstLetter(word)).to.deep.equal(`${word} is not a string`);
});

it('capitalizes each word in a string', () => {
  const word = 'sheldon cooper';
  expect(capitalizeFirstLetter(word)).to.deep.equal('Sheldon Cooper');
});
