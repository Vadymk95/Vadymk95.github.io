function fibonacci(n) {
     let num1 = 1;
     let num2 = 1;
     for (let i = 3; i <= n; i++) {
          let num3 = num1 + num2;
          num1 = num2;
          num2 = num3;
     }
     return num2;
}

alert( fibonacci(1) );
alert( fibonacci(3) );
alert( fibonacci(7) );