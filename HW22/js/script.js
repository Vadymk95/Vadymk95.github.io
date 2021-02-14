'use strict';

//цикл фибо
function fibonacci(n) {
	let num1 = 1;
	let num2 = 1;
	for (let i = 3; i <= n; i++) {
		let num3 = num1 + num2;
		num1 = num2;
		num2 = num3;
	}
	return num2;
}

console.log(showFibonacci(13));

// рекурсия фибо
function showFibonacci(n) {
	if (n <= 1) {
		return n;
	} else {
		return showFibonacci(n - 1) + showFibonacci(n - 2);
	}
}

console.log(fibonacci(13));


//цикл факториал

function factorial(num) {

	let result = num;
	if (num === 0 || num === 1) {
		return 1;
	}

	while (num > 1) {
		num--;
		result *= num;
	}
	return result;
}

console.log(factorial(5));


//рекурсия факториал

function showFactorial(n) {
	if (n != 1) {
		return n * showFactorial(n - 1);
	} else {
		return 1;
	}
}

console.log(showFactorial(5));