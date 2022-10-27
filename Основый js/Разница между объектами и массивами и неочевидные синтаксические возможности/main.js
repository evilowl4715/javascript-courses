"use strict";

const arr = ['a', 'b', 'c'];
const arrObj = {
    0: 'a',
    b: 'b',
    2: 'c',
};

// console.log(arr[1]);
// console.log(arrObj[0]); //если ключ цыфра или строка то [] скобки
// console.log(arrObj.b); //если ключ только строка то через точка

arrObj.new = '123'; //добавили свойство
arrObj['new2'] = '5555'; //добавили свойство
// console.log(arrObj['new']);
// console.log(arrObj.new2);

const new3 = 'new3';
arrObj[new3] = '999'; //создаем через переменную
console.log(arrObj);

// const obj = {a: 1, b: 2};
// console.log(obj.a);

const obj = {
    Anna: 500,
    'Xenia': 800,
    abs: {
        df: [{}, {}],
        def: {
            
        }
    }
};