(function () {
const numX = parseInt(prompt("Введите первое значение", 0));
const numY = parseInt(prompt("Введите введите значение", 0));
if (Number.isNaN(numX) || Number.isNaN(numY) || numX < 1 || numY < 1) {
    alert("Ошибка, неверные значения");
    return;
}
const MultipleX = parseInt(numX / numY) * numY;
const MultipleY = MultipleX + numY;
const ArgumentX = numX - MultipleX;
const ArgumentY = MultipleX - numX;
if (ArgumentY > ArgumentX && MultipleX!= 0) {
    alert(MultipleX);
} else if (MultipleY!= 0) {
    alert(MultipleY);
} else {
    alert("Ошибка");
  }
}) ();






