"use strict";

const salaries = {
     HRs: { Alice: 500, Bob: 700  },
     Devs: { Carol: 2500, Carlos: 1000, Charles: 1500 },
     QAs: { Chuck: 1650, Craig: 850, Dave: 3000}
};

let salaries1 = {...salaries};



     for (let keys in salaries) {

          salaries1[keys] = {...salaries[keys]};

          for (let newKeys in salaries[keys]) {

               salaries1[keys][newKeys] *= 2;

          }

     }

console.log(salaries);
console.log(salaries1);