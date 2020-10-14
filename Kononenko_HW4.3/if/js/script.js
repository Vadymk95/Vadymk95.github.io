const teaOrCoffee = prompt("Чай или кофе?");
if (teaOrCoffee == "чай") {
     const question = confirm("Сахарок кидать?");
          if (question == true) {
          alert("Держи, я 2 ложечки кинул");
     } else {
          alert("Держи мужицкий чай");
     }
} else if (teaOrCoffee == "кофе") {
          const question = confirm("Кофе с сахаром?");
          if (question == true) {
          alert("Ну, вообще, кофе с сахаром зашквар, но я тебе бросил чутка");
     } else {
          alert("Держи настоящий кофе!");
     }
} else {
     alert("Это что-то не понятное");
}