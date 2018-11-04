'use strict';

const names = [
  'Beth',
  'Johnny',
  'Dave',
  'Rachel',
  'Newton',
];

const pickName = () => {
  const randomName = Math.floor(Math.random() * names.length);
  return names[randomName];
};

module.exports = {
  randomName: pickName,
};
