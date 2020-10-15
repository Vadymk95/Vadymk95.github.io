(function () {
const numX = parseInt(prompt("Введите первое значение", 0));
const numY = parseInt(prompt("Введите второе значение", 0));
if (Number.isNaN(numX) || Number.isNaN(numY) || numY < 1) {
    alert("Ошибка, неверные значения");
return;
}
const multipleX = parseInt(numX / numY) * numY;
const multipleY = multipleX + numY;
if(multipleX < 0) {
    alert(1);
} else if ( multipleX!= 0) {
    alert(multipleX);
} else if (multipleY!= 0) {
    alert(multipleY);
} else {
    alert("Ошибка");
  }
}) ();