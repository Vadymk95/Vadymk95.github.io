"use strict";

const arr = [

	{ name: 'Vasya', surname: 'Ivanov' },
	{ name: 'Vanya', surname: 'Ivanov' },
	{ name: 'Albert', surname: 'Vasyliev' },

]

function keyBy(arr, key) {

	const result = arr.reduce((result, elem) => {

		if (!result[elem[key]]) {

			result[elem[key]] = [];

		}

		result[elem[key]].push(elem);

		return result;

	}, {});

	return result;

}

console.log(keyBy(arr, 'surname'));