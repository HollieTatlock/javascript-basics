const sayHello = string => {
  return 'Hello, ' + string + '!';
  return 'Hello, MCR Codes!';
  return 'Hello, fsghjdfkhgf!';
};

const uppercase = string => {
  return string.toUpperCase();
};

const lowercase = string => {
  return string.toLowerCase();
};

const countCharacters = string => {
  return string.length
};

const firstCharacter = string => {
  return string.[0]
};

const firstCharacters = (strings, n) => {
  return strings.slice(0,n)
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
