'use strict'



//метод reverse
const someStr = "Я скутер!";

String.prototype.reverse = function () {
	return this.split("")
		.reverse()
		.join("");
}



//не мутирующий sort
const myArray = [2, 5, 4, 8, "String", 6, 9, 1, 3, 7];

Array.prototype.sort = function () {
	return this.arr = Object.keys(this.reduce((arr, value) => {
		arr[value] = value;
		return arr;
	}, {}))
		.map(val => +val ? +val : val);
}



//добавить методы массива map, reduce и find querySelectorAll'у
NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.find = Array.prototype.find;
NodeList.prototype.reduce = Array.prototype.reduce;

console.log(document.querySelectorAll("td").map((elem) => { return Math.sqrt(+elem.textContent) }));




//бонус
const some = Object.create(Array.prototype);
const nodeListMethods = Object.getOwnPropertyNames(NodeList.prototype);

nodeListMethods.forEach(swap);

function swap(methodName) {
	if (methodName !== "length") {
		some[methodName] = NodeList.prototype[methodName];
	}
};

Object.setPrototypeOf(NodeList.prototype, some);



