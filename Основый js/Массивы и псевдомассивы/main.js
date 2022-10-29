'use strict';

const arr = [2, 10, 8, 5, 55];
arr.sort(compareNum);
console.log(arr);
//сортировка чисел
function compareNum(a, b) {
    return a - b;
}

// arr.pop();
// arr.push(10);
// console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

const str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join('; '));