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

const caesarCipher = (str, shift) => {
  if (shift === 0) return str;
  const newStr = str.split('');
  for (let i = 0; i < str.length; i += 1) {
    // use charCodeAt and fromCharCode
    const currentCharCode = str.charCodeAt(i);
    let newCharCode = currentCharCode + shift;
    if (currentCharCode >= 65 && currentCharCode <= 90) {
      if (newCharCode > 90) newCharCode -= 26;
      if (newCharCode < 65) newCharCode += 26;
      newStr[i] = String.fromCharCode(newCharCode);
    } else if (currentCharCode >= 97 && currentCharCode <= 122) {
      if (newCharCode > 122) newCharCode -= 26;
      if (newCharCode < 97) newCharCode += 26;
      newStr[i] = String.fromCharCode(newCharCode);
    }
  }
  return newStr.join('');
};

export {
  Calculator, capitalize, reverseString, caesarCipher,
};
