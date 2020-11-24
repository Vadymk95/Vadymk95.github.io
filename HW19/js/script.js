'use strict';

//без querySelector
const elem = document.getElementById('container');
console.log(elem);

// с использованием querySelector
const elem1 = document.querySelector('#container');
console.log(elem1);

//li с классом second
const elem2 = document.querySelectorAll('.second');
console.log(elem2);

//li с классом third
const elem3 = document.querySelector('ol > li.third');
console.log(elem3);

//добавление текста Hello

const elem4 = document.querySelector('div');
elem4.innerHTML = '<p>Hello</p>';

// добавить класс main элементу с классом footer
const elem5 = document.querySelector('.footer');
elem5.classList.add('main');
elem5.classList.remove('main');

//создайте новый элемент li
const elem6 = document.createElement('li');
elem6.textContent = 'four';

//поместите li в ul
const elemLi = document.body.querySelector('ul');
elemLi.appendChild(elem6);

//Сделайте зелёный фон всем li внутри ol.
const elem7 = document.querySelector('ol');
elem7.style.backgroundColor = 'green';

//удалите div с классом footer
const elem8 = document.querySelector('.footer');
elem8.remove();