const createPerson = (name, age) => {
  return {
    name: name,
    age: age
  }
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
return object.age;
};

const hasProperty = (property, object) => {
  // your code here
};

const isOver65 = person => {
  return person.age > 65
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(obj => obj.name === name);
};

const findHondas = cars => {
  return cars.filter(obj => obj.manufacturer === "Honda");
};

const averageAge = people => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
