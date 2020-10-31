"use strict";

const salaries = {
     HRs: { Alice: 500, Bob: 700  },
     Devs: { Carol: 2500, Carlos: 1000, Charles: 1500 },
     QAs: { Chuck: 1650, Craig: 850, Dave: 3000}
};

const salaries1 = {
     HRs1: {
          ...salaries.HRs,
     },
     Devs1: {
          ...salaries.Devs,
     },
     QAs1: {
          ...salaries.QAs,
     },
};

const HRs2 = salaries1.HRs1;
const Devs2 = salaries1.Devs1;
const QAs2 = salaries1.QAs1;


function getProps(HRs2, Devs2, QAs2) {

     for (let key in HRs2) {
          HRs2[key] *= 2;
     }

     for (let key in Devs2) {
          Devs2[key] *= 2;
     }

     for (let key in QAs2) {
          QAs2[key] *= 2;
     }

     return;
}

console.log(getProps(HRs2, Devs2, QAs2));
console.log(salaries1);
console.log(salaries);