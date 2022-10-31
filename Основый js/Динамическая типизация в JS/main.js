'use strict';


// To string
console.log(typeof(5 + ''));

const num = 5;

console.log('hello' + num);

const fontSize = 26 + 'px';

// To number
console.log(typeof(+'5'));
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt("hello", "");

// To boolean
// 0, ' ', null, undefined, Nan = false
// все остальное true

let switcher = null;

if (switcher) {
    console.log('work');
}

switcher = 1;

if (switcher) {
    console.log('work');
}