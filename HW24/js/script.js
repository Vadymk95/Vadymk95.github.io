'use strict'

const arr1 = [1, 2, 3, 4, 5, 6];

//1
function createRangeFilter(min, max) {
	return (num) => { return num >= min && num <= max };
}

console.log(arr1.filter(createRangeFilter(2, 4)));

//2
const arr23 = [
	{ name: 'Vasya', surname: 'Ivanov' },
	{ name: 'Vanya', surname: 'Ivanov' },
	{ name: 'Albert', surname: 'Vasyliev' },
]

function createKeyBy(propName) {
	function keyBy(arr) {
		const result = arr.reduce((result, elem) => {

			if (!result[elem[propName]]) {
				result[elem[propName]] = [];
			}
			result[elem[propName]].push(elem);
			return result;
		}, {});
		return result;
	}
	return keyBy;
}

console.log(createKeyBy("surname")(arr23));


//3


function createCalcPercent(percent) {
	function calcPercent(value) {
		return value * (percent / 100);
	}
	return calcPercent;
}

console.log(createCalcPercent(50)(10));

