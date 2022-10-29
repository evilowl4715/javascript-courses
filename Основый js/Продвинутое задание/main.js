"use strict";

// Место для первой задачи
function calculateVolumeAndArea(lenght) {
    if (typeof (lenght) !== 'number' || lenght < 0 || !Number.isInteger(lenght)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = lenght * lenght * lenght;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/

    area = 6 * (lenght * lenght);

    return `Объем куба ${volume}, площадь всей поверхности ${area}`;
}

console.log(calculateVolumeAndArea(5));

// Место для второй задачи
function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}
console.log(getCoupeNumber(33));


// Место для первой задачи
function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} Минут`;
}

console.log(getTimeFromMinutes(155));

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро

    if (typeof(a) != 'number' ||
        typeof(b) != 'number' ||
        typeof(c) != 'number' ||
        typeof(d) != 'number') {
            return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}

console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(1, 5, '6', '10'));


// числа Фибоначчи

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

fib(5);