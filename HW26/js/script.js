'use strict';

class Vegetable {
	constructor(name) {
		this.name = name;
	}
}

class Animal {
	constructor(legs) {
		this.legs = legs;
	}

	stomach = [];

	eat(food) {
		this.stomach.push(food);
	}
}

class Rabbit extends Animal {
	constructor(breed, legs) {
		super(legs);
		this.breed = breed;
	};

	eat(food) {
		if (food instanceof Vegetable) {
			this.stomach.push(food);
		} else {
			throw new Error('Invalid arguments');
		}
	}

	jump() {
		console.log("Jump!");
	};
}

class Snake extends Animal {
	constructor(isPoisonous, legs) {
		super(legs);
		this.isPoisonous = isPoisonous;
	};

	eat(food) {
		if (food instanceof Rabbit) {
			this.stomach.push(food);
		} else {
			throw new Error('Invalid arguments');
		}
	}

	crawl() {
		console.log("I am snake!")
	};
}

class Human extends Animal {
	constructor(firstName, lastName, legs) {
		super(legs);
		this.firstName = firstName;
		this.lastName = lastName;
	};

	eat(food) {
		if (food instanceof Rabbit || food instanceof Snake || food instanceof Vegetable) {
			this.stomach.push(food);
		} else {
			throw new Error('Invalid arguments');
		}
	}

	walk() {
		console.log("I am human!");
	};

	greet() {
		console.log("Hello guys!");
	};
}