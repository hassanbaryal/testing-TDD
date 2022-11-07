function capitalize(str) {
  if (str.length < 1) return str;
  const newStr = str.split('');
  newStr[0] = newStr[0].toUpperCase();
  return newStr.join('');
}

function reverseString() {

}

export { capitalize, reverseString };
