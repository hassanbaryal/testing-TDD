/* eslint-disable no-undef */
import { capitalize, reverseString } from './index';

// CAPITAILIZE TESTS
describe('capitalize', () => {
  test.only('Empty String', () => {
    expect(capitalize('')).toMatch('');
  });

  test.only('Capitalizes first character', () => {
    expect(capitalize('hmm you are right.')).toMatch(/Hmm you are right./);
  });
});

describe('reverseString', () => {
  test.only('Empy String', () => {
    expect(reverseString('')).toMatch('');
  });

  test.only('Reverses String', () => {
    expect(reverseString('Ting tang.')).toMatch(/.gnat gniT/);
  });
});
