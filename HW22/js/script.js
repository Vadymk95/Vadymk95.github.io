'use strict';

let arr = [];
let joinStr;
//цикл
function showFibonacci(n) {
	let num1 = 1;
	let num2 = 1;
	for (let i = 3; i <= n; i++) {
		let num3 = num1 + num2;
		num1 = num2;
		num2 = num3;
		arr.push(num2);
	}
	if (n === 2) {
		arr.length = 0;
		arr.push(1, 1);
		joinStr = arr.join(", ");
		return joinStr;
	}
	else if (n === 1) {
		return "1";
	} else {
		arr.unshift(1, 1);
		joinStr = arr.join(", ");
		return joinStr;
	}

}
console.log(showFibonacci(13));