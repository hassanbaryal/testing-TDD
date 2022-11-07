/* eslint-disable no-undef */
import { Calculator, capitalize, reverseString } from './index';

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

describe('Calculator Object', () => {
  // const calculator = new Calculator();
  test.only('add method', () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });

  test.only('subtract method', () => {
    expect(Calculator.subtract(1, 3)).toBe(-2);
  });

  test.only('divide method: non-zero division', () => {
    expect(Calculator.divide(4, -2)).toBe(-2);
    expect(Calculator.divide(2, 4)).toBeCloseTo(0.5);
  });

  test.only('divide method: zero division', () => {
    expect(Calculator.divide(4, 0)).toBe(Infinity);
  });

  test.only('multiply method', () => {
    expect(Calculator.multiply(4, 3)).toBe(12);
    expect(Calculator.multiply(4, 0.3)).toBeCloseTo(1.2);
  });
});
