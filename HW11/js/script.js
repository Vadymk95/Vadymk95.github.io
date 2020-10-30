'use strict';




const obj1 = {

     0: "zero",

     42: "answer",

     greeting: "Hello",

     3.14: "PI",

}


function getNumberKeys(obj1) {

     for (let key in obj1) {

          if (!isNaN(+key)) {

               console.log(obj1[key]);

          }

     }

     return;

}

console.log(getNumberKeys(obj1));