"use strict";

//1

function Cat(name, breed, meow) {

     this.name = name;
     this.breed = breed;

     this.getMeow = function () {

          console.log("Мяу!");

     }

}

const cat = new Cat("Kuzya", "Outbreed","Мяу!");

console.log(cat.name);
console.log(cat.breed);
console.log(cat.getMeow());

//2

function User(name, lastname, age) {

     this.name = name;
     this.lastname = lastname;
     this.age = age;

     this.greet = function () {

          console.log(`Hi! My name is ${this.name}!`);

     }

}

const user1 = new User("Vadym", "Kononenko", 25);

console.log(user1.greet());