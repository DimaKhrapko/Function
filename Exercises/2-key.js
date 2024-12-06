'use strict';

const generateKey = (length, characters) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * characters.length);
    key += characters[randIndex];
  }
  return key;
  // Generate string of random characters
  // Use Math.random() and Math.floor()
  // See documentation at MDN
};
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
console.log(generateKey(16, characters));
