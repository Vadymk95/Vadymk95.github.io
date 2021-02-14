'use strict';

const fruits = ['Apple', 'Banana', 'Pineapple'];

fruits.push('Orange', 'Grapes');

fruits[1] = 'Peer';

const popFruit = fruits.pop();

console.log(popFruit);

fruits.unshift('Watermelon');
