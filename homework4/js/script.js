//4.1(a)
if (confirm("beer?") == true) {
     beerMessage = "Have a beer!";
} else {
     beerMessage = "Have a whiskey!";
}
console.log(beerMessage);

//4.1(b)
const beerMessage2 = confirm("beer?") ? 'Have a beer!' : 'Have a whiskey!';
     console.log(beerMessage2);

//---------------------------------------------------------------

//4.2(a)
const age = prompt("Укажите возраст:");
if (age < 18) {
     alert("Иди рюкзак собирай");
} else if (age < 30) {
     alert("Здарова, епта!))");
} else  {
     alert("Доброго времени суток, сэр!");
} console.log(age);

//4.2(b)
const age2 = prompt("Укажите возраст:");
const result2 = (age < 18) ? "Иди рюкзак собирай" :
     (age < 30) ? "Здарова, епта!))" :
     "Доброго времени суток, сэр!";
console.log(result2);

//---------------------------------------------------------------

//4.3(a)
const teaOrCoffee = prompt("Чай или кофе?");
if (teaOrCoffee == "чай") {
     const question = confirm("Чай с сахаром?");
     if (question == true) {
     alert("Держи, я 2 ложечки кинул");
  } else {
     alert("Держи мужицкий чай");
  }
} else {
     const question = confirm("Кофе с сахаром?");
     if (question == true) {
     alert("хорошо");
  } else {
     alert("Держи настоящий кофе!");
  }
}
console.log(teaOrCoffee);

//4.3(b)
let teaOrCoffee2 = prompt("Чай или кофе?");
(teaOrCoffee2 == "чай") ? (confirm("с сахаром или без?") ? alert("Держи, я 2 ложечки кинул") :
     alert("Держи мужицкий чай")) :
     confirm("Кофе с сахаром?") ? alert("хорошо") : alert("Держи настоящий кофе!");
console.log(teaOrCoffee2);
