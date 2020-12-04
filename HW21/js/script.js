'use strict'

const message = document.querySelector('.msg');
const ol = document.body.querySelector('ol');
const btnRemove = document.querySelector('.btn-remove');
btnRemove.addEventListener('click', removeOnClick);

form.onsubmit = function () {
	if (message.value === '') return false;
	const li = document.createElement('li');
	li.textContent = message.value;
	ol.appendChild(li);
	li.classList.add('main');
	form.reset();
	return false;
};

function removeOnClick() {
	document.querySelector('.focused') ? document.querySelector('.focused').remove()
		: document.querySelector('ol').lastElementChild.remove();
}



let selectedLi;
ol.onclick = function (event) {
	let target = event.target;
	if (target.tagName != 'LI') return;
	highlight(target);
};

function highlight(li) {
	if (selectedLi) {
		selectedLi.classList.remove('focused');
	}
	selectedLi = li;
	selectedLi.classList.add('focused');
}
