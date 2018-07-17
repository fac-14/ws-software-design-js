/*
 * Exercise: Refactor the code!
 *
 * This file is a collection of functions you've been asked to refactor.
 *
 * The primary purpose of this exercise is to use your judgement to decide when
 * and where to introduce appropriate abstractions, and whether you can use
 * either abstractions provided by JavaScript, or write your own.
 *
 * The command
 *   npm run s1.functions
 * will run tests to ensure the functions do what they should. They should all
 * still pass when you've finished refactoring.
 *
 * Advice:
 * + Try to recognise common patterns in the code.
 * + When you have recognised a pattern, think about if you could make a
 *   function to encapsulate it, instead of repeating code in several places.
 */
'use strict';

function capitalisation (value){
  return value.slice(0, 1).toUpperCase().concat(value.slice(1))
};

function increment (value) {
  return value + 1;
};

function reverse (value) {
  return value.split('').reverse().join('');
}


function modifyObj(func, keyValue, input) {
  const keys = Object.keys(input);
  const result = {};

  for (var i = 0; i < keys.length; i++) {
    if(keyValue == "keys") {
      const value = keys[i];
      const changed = func(value);
      result[changed] = input[value];
    } else if (keyValue == "values") {
      const value = input[keys[i]];
      result[keys[i]] = func(value);
    }
  }

  return result;
}


function capitaliseObjectKeys (input) {
  return modifyObj(capitalisation, "keys", input);
}


function capitaliseObjectValues (input) {
  return modifyObj(capitalisation, "values", input);
}


function incrementObjectValues (input) {
  return modifyObj(increment, "values", input);
  // const keys = Object.keys(input);
  // const result = {};

  // for (var i = 0; i < keys.length; i++) {
  //   const value = input[keys[i]];
  //   result[keys[i]] = value + 1;
  // }

  // return result;
}

function reverseObjectKeys (input) {
  return modifyObj(reverse, "keys", input);
  // const keys = Object.keys(input);
  // const result = {};

  // for (var i = 0; i < keys.length; i++) {
  //   const reversedKey = keys[i].split('').reverse().join('');
  //   result[reversedKey] = input[keys[i]];
  // }

  // return result;
}

module.exports = {
  capitaliseObjectKeys,
  capitaliseObjectValues,
  incrementObjectValues,
  reverseObjectKeys,
};
