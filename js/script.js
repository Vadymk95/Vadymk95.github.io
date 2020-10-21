"use strict";


//1

/*
const num1 = prompt("введите первое число");
const num2 = prompt("введите второе число");

function pow(num1, num2) {
     let yourNum = num1;

     for (let i = 1; i < num2; i++){
          yourNum *= num1;
     }
return yourNum;
}


if (num2 < 0 || isNaN(num1) || isNaN(num2)) {
     console.log("Вы ввели не корректные данные");
} else if (num1 > 0, num2 > 0) {
     console.log( pow (num1, num2) );
} else {
     console.log(1);
}


//2


const firstName = prompt("Введите ваше имя:");
const lastName = prompt("Введите вашу фамилию:");
const age = prompt("Введите ваш возраст:");

function createUser(firstName = null, lastName = null, age = null) {

     const infoUser = {
          name: firstName,
          surname: lastName,
          ageUser: age,
     };

return infoUser;
}
console.log(createUser(firstName, lastName, age));

*/
//3


const someNum = prompt("Enter your number:");


const yourGreeting = ("number less than 100");
const yourGreeting2 = ("number greater than 100");

function greeting1(yourGreeting) {
     return yourGreeting;
}

function greeting2(yourGreeting2) {
     return yourGreeting2;
}

function checkNumbers(greeting1, greeting2, someNum) {
     if (someNum < 100) {
          console.log(greeting1 (yourGreeting));
     } else {
          console.log(greeting2 (yourGreeting2));
     }
     return someNum;
}
console.log(checkNumbers(greeting1, greeting2, someNum));

