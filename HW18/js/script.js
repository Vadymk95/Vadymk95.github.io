"use strict";

//1
/* Создайте функцию capitalize(string),
котораяпринимает строку со словами через
пробел и заменяет первую букву 
каждого слова на заглавную
*/

function camalize(str) {

	return str.split(' ')
		.map((elem) => (
			(elem.charAt(0).toUpperCase() + elem.substr(1))
		))
		.join(' ');
}
console.log(camalize("back in black"));


//2
/*
Напишите функцию checkSubstring(string, substring),
которая проверяет наличие подстроки substring в строке string.
Проверка должна быть нечувствительна к регистру.
*/
function checkSubstring(string, substring) {

	return string.toLowerCase().includes(substring.toLowerCase());

}

console.log(checkSubstring("Back iN Black", "in"));