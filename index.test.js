/* eslint-disable no-undef */
import { capitalize } from './index';

// CAPITAILIZE TESTS
describe('capitalize', () => {
  test.only('Empty String', () => {
    expect(capitalize('')).toMatch('');
  });

  test.only('Capitalizes first character', () => {
    expect(capitalize('hmm you are right.')).toMatch(/Hmm you are right./);
  });
});

describe.skip('reverseString', () => {});
