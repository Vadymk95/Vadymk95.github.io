'use strict';
//обьект для проверка сортировки по имени
const obj = {
	name: null,
	dir: null,
}


//всякие нужные переменные
let headline;
let arr = [];
let j;

// //массив чисел
// for (j = 1; j < 16; j++) {
// 	let miniArr = [];
// 	if (j < 16) {

// 		for (let i = 0; i < 4; i++) {

// 			miniArr.push(Number(table.rows[j].cells[i].innerHTML));

// 		}
// 		arr.push(miniArr);
// 	}

// }



// let glo;
// let i;

// for (let i = 1; i < 16; i++) {
// 	glo = table.rows[i];

// 	for (let a = 0; a < 4; a++) {
// 		Number(table.rows[i].cells[a].innerHTML) = arr[i][Number(table.rows[i].cells[a].innerHTML)];
// 	}
// }

// const newTable = document.querySelector('table');

// function renderTable(elem, items) {
// 	const tr = document.createElement('tr');

// 	const newArr = items.map(function (number) {
// 		const td = document.createElement('td');
// 		td.innerHTML = number;
// 		return td;
// 	})

// 	tr.append(...newArr);
// 	elem.rows[0].append(tr);
// }

// console.log(renderTable(newTable, arr[1]));


//дефолтный массив с рандомными числами
const defaultValue = Array.from(table.rows);
//функция 
function sortTable(columnIndex) {
	//переменная, содержащая массив, который перебирается и на основе этого вставляются ячейки в нужной последовательности
	const sortedRows = Array.from(table.rows)
		.slice(1)
		.sort((rowA, rowB) =>
			rowA.cells[columnIndex].innerHTML > rowB.cells[columnIndex].innerHTML ? 1 : -1);
	//иф который проверяет значение имени: 1) проверка по возрастанию 2) потом по убыванию 3) возвращает дефолтное
	if (obj.name == null) {
		headline = table.rows[0].cells[columnIndex];
		obj.name = headline.textContent = "Ascending";
		return table.tBodies[0].append(...sortedRows);
	} else if (obj.name === "Ascending") {
		headline = table.rows[0].cells[columnIndex];
		obj.name = headline.textContent = "Descending";
		return table.tBodies[0].append(...sortedRows.reverse());
	} else if (obj.name === "Descending") {
		headline = table.rows[0].cells[columnIndex];
		obj.name = headline.textContent = "Without sorting";
		return table.tBodies[0].append(...defaultValue);
	}

}
sortTable(3);






