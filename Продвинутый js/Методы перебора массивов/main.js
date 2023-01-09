'use strict';

//filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);


//map

// const answers = ['IVan', 'AnnA', 'Ksenia', 'Voldemart'];

// const result = answers.map(item => {
//     return item.toLocaleLowerCase();
// });

// console.log(result);

//every/some

// const some = [4, 'AnnA', 'Ksenia', 'Voldemart'];

// console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));



//reduce

// const arr = [4, 1, 6, 11];

// const res = arr.reduce((sum, current) => {
//     return sum + current;
// });

// console.log(res);

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => {
//     return `${sum}, ${current}`;
// });

// console.log(res);


const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);