'use strict';

const sentencer = require('sentencer');

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

const generateSentence = () => {
    return sentencer.make('The {{ adjective }} brown {{ noun }} jumped over the {{ adjective }} {{ noun }}');
};

module.exports = {
  randomName: pickName,
  generateSentence,
};
