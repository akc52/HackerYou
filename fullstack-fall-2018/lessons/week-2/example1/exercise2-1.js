'use strict';

const sentencer = require('sentencer');

const names = [
  'Beth',
  'Johnny',
  'Dave',
  'Rachel',
  'Newton',
];

exports.pickName = () => {
  const randomName = Math.floor(Math.random() * names.length);
  return names[randomName];
};

exports.generateSentence = () => {
    return sentencer.make('The {{ adjective }} brown {{ noun }} jumped over the {{ adjective }} {{ noun }}');
};
