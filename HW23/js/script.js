'use strict'

const example = {
	name: "cat",
	age: 2,
	friend: {
		name: "Vasya",
		age: 1,
		friend: {
			name: "Kuzya",
			age: 3,
		}
	}
}

const exampleArr = ["cat", "dog", 1, { cat: "Kuzya", age: 2 }];

function getCopy(obj) {
	if (null === obj || "object" != typeof obj) return obj;

	if (Array.isArray(obj)) {
		const newArr = [];
		for (let i = 0, length = obj.length; i < length; i++) {
			newArr[i] = getCopy(obj[i]);
		}
		return newArr;
	}

	if (obj instanceof Object) {
		const newObj = {};
		for (let value in obj) {
			if (obj.hasOwnProperty(value)) newObj[value] = getCopy(obj[value]);
		}
		return newObj;
	}
}

console.log(getCopy(exampleArr));
