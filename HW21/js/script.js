'use strict'

const message = document.querySelector('.msg');
const btnRemove = document.querySelector('.btn-remove');
btnRemove.addEventListener('click', removeOnClick);

form.onsubmit = function (evt) {
	if (message.value === '') return false;
	const li = document.createElement('li');
	const ol = document.body.querySelector('ol');
	evt.preventDefault();
	li.textContent = message.value;
	ol.appendChild(li);
	form.reset();
	return false;
};

function removeOnClick() {
	document.querySelector('ol').lastElementChild.remove();
}








