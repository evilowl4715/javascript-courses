'use strict';

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('hello');
    }
};

const jonh = Object.create(soldier);

// const jonh = {
//     health: 100
// };

// Object.setPrototypeOf(jonh, soldier);

jonh.sayHello();