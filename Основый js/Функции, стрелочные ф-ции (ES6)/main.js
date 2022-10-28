"use strict";

// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("hello");
// console.log(num);

// замыкание функции
// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     console.log(num);
// }

// showFirstMessage("hello");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(10, 20));
// console.log(calc(5, 6));
// console.log(calc(25, 22));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();

// console.log(anotherNum);


// function declaration
//Создаеться до начала выполнения скрипта, можно вызывать перед объявлением
// function foo() {

// }
// foo();


// function expression
// Создаеться только тогда, когда доходит поток кода, можно вызвать только после объявления
// let foo = function () {

// };
// foo();

// Стрелочка функция
// не имеет своего контекста (this)
// const calc = (a, b) => a + b;

// const calc = (a, b) => { return a + b };
// console.log(calc(10, 10));

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amout, curr) {
//     return curr * amout;
// }

// function promotion(result) {
//      console.log(result * discount);
// }
// const res = convert(500, usdCurr);
// promotion(res);


// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) {
//             return;
//         }
//     }

//     console.log('Done');
// }
// test();

// function doNothing() {};
// console.log(doNothing() === undefined);

// дз
function sayHello(name) {
    return `Привет, ${name}!`;
}

sayHello('Антон');

function returnNeighboringNumbers(num) {
    return [num -1, num, num + 1];
}
returnNeighboringNumbers(5);

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }

    return str;
}

console.log(getMathResult(10, 5));