"use strict"

let i;
let y;
let sum;
let simple;
let round;
let fixed;

for (i = 1; i < 100; i++)
    for (y = 1; y < 100; y++) {
        sum = i/100 + y/100;
        if (sum != (i + y) / 100) {
        simple = (i + y) / 100;
        round = Math.round(sum*100)/100;
        fixed = +sum.toFixed(5);
        console.log(`${i/100} + ${y/100} = ${sum} ---> Simple > ${simple}   | Math.round > ${round}   | Fixed > ${fixed}`);
        }
}

console.log(`New feature`);

// https://proglib.io/p/wtf-javascript-math
// https://learn.javascript.ru/number#netochnye-vychisleniya