'use strict'

class Slider {
	constructor(slides) {
		this.images = document.querySelectorAll(slides.images);
		this.btnPrev = slides.btnPrev;
		this.btnNext = slides.btnNext;

		let counter = 0;
		let slider = this;
		const currentImg = document.querySelectorAll(slides.images);
		const container = document.querySelector('.slider__img');
		const stepSize = currentImg[0].clientWidth;
		
		container.style.transform = 'translateX(' + `${-stepSize * counter}px)`;

		this.prev = function () {
			if (counter <= 0) counter = currentImg.length;
			counter--;
			container.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
		}

		this.next = function () {
			counter >= currentImg.length - 1 ? (counter = -1) : null;
			counter++;
			container.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
		}
		document.querySelector(slider.btnPrev).addEventListener('click', slider.prev)
		document.querySelector(slider.btnNext).addEventListener('click', slider.next)
	}
}

window.addEventListener('load', () => {
	new Slider({
		images: '.container .slider img',
		btnPrev: '.container .slider .prev',
		btnNext: '.container .slider .next',
	});
})