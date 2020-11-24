'use strict';

const arr = [
	["4", "6", "9", "7"],
	["3", "8", "2", "5"],
	["2", "3", "4", "2"],
	["7", "5", "1", "2"],
	["1", "2", "5", "6"],
	["7", "9", "2", "4"],
	["0", "0", "1", "1"],
	["9", "0", "9", "0"],
	["6", "1", "6", "9"],
	["4", "3", "8", "2"],
	["5", "7", "5", "1"],
	["2", "4", "0", "7"],
];


const tableContainer = document.getElementById('table');

new Handsontable(tableContainer, {
	data: arr,
	colHeaders: ["Fisrt column", "Second column", "Third column", "Fourth column"],
	multiColumnSorting: true,
});
const removeElem = document.querySelector('#hot-display-license-info').remove();








