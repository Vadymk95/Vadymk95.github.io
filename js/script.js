//4.1(a)
const doesWantBeer = confirm("Do you want beer?");

let beerMessage;

if (doesWantBeer) {
     beerMessage = "Have a beer!";
} else {
     beerMessage = "Have a whiskey!";
}

console.log(beerMessage);

//4.1(b)
const doesWantBeer2 = confirm("Do you want beer?");
const beerMessage2 = doesWantBeer2 ?
     "Have a beer!" : "Have a whiskey!";

console.log(beerMessage2);

//---------------------------------------------------------------

//4.2(a)
const ageInput = prompt("Укажите возраст:");

let greeting;

if (ageInput < 18) {
     greeting = ("Здарова");
} else if (ageInput < 30) {
     greeting = ("Привет!");
} else  {
greeting = ("Добрый день!");
}

console.log(greeting);

//4.2(b)
const age2 = prompt("Укажите возраст:");
let result2 = age2 < 18 ? "Иди рюкзак собирай" :
     age2 < 30 ? "Здарова, епта!))" :
     "Доброго времени суток, сэр!";

console.log(result2);

//---------------------------------------------------------------

//4.3(a)
const isTea = confirm("Tea or coffeee?");
const withSugar = confirm("With sugar?");

let drink;

if (isTea && withSugar) {
     drink = "This tea with sugar";
} else if (isTea) {
     drink = "This tea without sugar";
} else if (withSugar) {
     drink = "This coffee with sugar";
} else {
     drink = "This coffee without sugar";
}

console.log(drink);

//4.3(b)
const isTea2 = confirm("Tea or coffeee?");
const withSugar2 = confirm("With sugar?");

let drink2 = isTea2 && withSugar2 ?
     "This tea with sugar" :
     isTea2 ? "This tea without sugar" :
     withSugar2 ? "This coffee with sugar" :
     "This coffee without sugar";

console.log(drink2);