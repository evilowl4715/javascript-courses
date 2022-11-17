'use strict';

// не живые статичные коллекции
const boxesQuery = document.querySelectorAll('.box');
// живые коллекции
const boxesGet = document.querySelectorAll('.box');

boxesQuery.forEach(box => {
    if (box.matches('.this')) {
        console.log('This');
    }
});

console.log(boxesQuery[0].closest('.wrapper'));

// boxesQuery[0].remove();
// boxesGet[0].remove();

// console.log(boxesQuery);
// console.log(boxesGet);


// console.log(Array.from(boxesGet));

