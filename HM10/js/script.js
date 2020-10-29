"use ctrict";

const obj1 = {};

function isEmptyObject(obj1) {
    for (let i in obj1) {
        if (obj1.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}

console.log(isEmptyObject(obj1));