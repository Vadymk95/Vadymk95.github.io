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
			super.eat(food);
		} else {
			throw new Error('Invalid arguments');
		}
	}

	jump() {
		return console.log("Jump!");
	};
}

class Snake extends Animal {
	constructor(isPoisonous, legs) {
		super(legs);
		this.isPoisonous = isPoisonous;
	};

	eat(food) {
		if (food instanceof Rabbit) {
			super.eat(food)
		} else {
			throw new Error('Invalid arguments');
		}
	}

	crawl() {
		return console.log("I am snake!")
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
			super.eat(food);
		} else {
			throw new Error('Invalid arguments');
		}
	}

	walk() {
		return console.log("I am human!");
	};

	greet() {
		return console.log("Hello guys!");
	};
}