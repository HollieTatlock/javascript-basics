const getNthElement = (index, array) => {
  return array[index % 4];
};

const arrayToCSVString = array => {
  return array.join();

};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
 array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
return strings.map(strings => strings.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(strings => strings.split("").reverse().join(""));
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => 

};

const elementsStartingWithAVowel = strings => {
  return strings.filter(strings => strings.charAt(0).match(/[a,e.i,o,u,]/i));
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
 
};

const sortByLastLetter = strings => {

};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
