'use strict';

/*
Напишите функцию, которая принимает массив с числами, возвращает их сумму.
Решите задачу двумя способами: с помощью цикла и с помощью метода reduce
*/


//1.1

const array = [1, 2, 3, 4, 5];

function getArray(array) {

	let result = 0;

	for (let i = 0; i < array.length; i++) {

		result += array[i];

	}

	return result;

}

console.log(getArray(array));


//1.2

const sum = array.reduce((result, elem) => result + elem);

console.log(sum);



/*
Напишите функцию mapToUpperCase(arr), которая принимает массив строк,
а возвращает новый массив строк в верхнем регистре. Решите задачу с помощью цикла и метода map
*/


//2.1

const words = ["cat", "book", "phone", "snow"];

const upperWords = words.map((elem, index, sourceArray) => {
	return elem.toUpperCase();
});

console.log(upperWords);


//2.2


function getWords() {

	const newArray = [];

	for (let elem of words) {

		newArray.push([elem.toUpperCase()]);

	}

	return newArray;

}

console.log(getWords());