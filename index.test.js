/* eslint-disable no-undef */
import {
  Calculator, capitalize, reverseString, caesarCipher, analyzeArray,
} from './index';

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

describe('caesarCipher', () => {
  test.only('Empy String', () => {
    expect(caesarCipher('Test', 0)).toMatch(/Test/);
  });

  test.only('String with positive shift of 3', () => {
    expect(caesarCipher('Testing this thing is weird', 3)).toMatch(/Whvwlqj wklv wklqj lv zhlug/);
  });

  test.only('String with negative shift of 7', () => {
    expect(caesarCipher('Testing this thing is weird', -7)).toMatch(/Mxlmbgz mabl mabgz bl pxbkw/);
  });

  test.only('String with punctiation', () => {
    expect(caesarCipher('What a weird day! Maybe, just maybe, I should check the time. Hmm, I\'m just going to sleep in.', 12)).toMatch(/Itmf m iqudp pmk! Ymknq, vgef ymknq, U etagxp otqow ftq fuyq. Tyy, U'y vgef sauzs fa exqqb uz./);
  });
});

describe('analyzeArray', () => {
  test.only('Empty array', () => {
    expect(analyzeArray([])).toEqual({
      average: null, min: null, max: null, length: null,
    });
  });

  test.only('Non-empty array', () => {
    expect(analyzeArray([1, 2, 3])).toEqual({
      average: 2, min: 1, max: 3, length: 3,
    });
  });

  test.only('Array with negative value', () => {
    expect(analyzeArray([1, -2, 4])).toEqual({
      average: 1, min: -2, max: 4, length: 3,
    });
  });
});
