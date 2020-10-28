"use ctrict";

const obj1 = {};

function getObject(obj1) {
     if ("someKey" in obj1){
          return false;
     } else {
          return true;
     }
}

console.log(getObject(obj1));
