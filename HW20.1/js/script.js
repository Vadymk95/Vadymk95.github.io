'use strict';

function sortTable(columnIndex) {
	const sortedRows = Array.from(table.rows)
		.sort((rowA, rowB) =>
			rowA.cells[columnIndex].innerHTML > rowB.cells[columnIndex].innerHTML ? 1 : -1);
	return table.tBodies[0].append(...sortedRows);
}
sortTable(1);








