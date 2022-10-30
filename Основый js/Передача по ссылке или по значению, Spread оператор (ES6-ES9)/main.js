"use strict";

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; // передача по ссылке

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add));
const clone = Object.assign({}, add);

clone.d = 20;
console.log(clone);
console.log(add);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'wefwfwfwef';

console.log(newArray);
console.log(oldArray);

// спред оператор
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'live', 'ppp'],
      internet = [...video, ...blogs, 'vk', 'ok'];

console.log(internet);