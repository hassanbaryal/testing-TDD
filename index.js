class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static divide(a, b) {
    return a / b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

function capitalize(str) {
  if (str.length < 1) return str;
  const newStr = str.split('');
  newStr[0] = newStr[0].toUpperCase();
  return newStr.join('');
}

function reverseString(str) {
  const newStr = str.split('').reverse();
  return newStr.join('');
}

export { Calculator, capitalize, reverseString };
