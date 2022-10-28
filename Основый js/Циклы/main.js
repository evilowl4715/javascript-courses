"use strict";

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while(num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

// цикл в цикле

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// пирамидка из звезд

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }


// console.log(result);


// циклы с метками
first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Thrid level: ${k}`);
        }
    }
}


function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    
    console.log(result);

    // Не трогаем
    return result;
}

firstTask();

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    let data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут

        for (let i = 0; i < data.length; i++) {
        
            if(typeof(data[i]) === 'string') {
                data[i] += " - done";
            } else if(typeof(data[i]) === 'number') {
               data[i] = data[i] * 2;
            }
    }
    
    console.log(data);
    
    
    // Не трогаем
    return data;
}
secondTask();


function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]
    }

    console.log(result);
    return result;
}

thirdTask();




const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);