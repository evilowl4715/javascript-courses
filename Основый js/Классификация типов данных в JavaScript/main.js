"use strict";

// числа
let number = 4,
    fractionalNumber = 4.6;

// Строка
const persone = 'Alex';

// Логический тип данных
const boolFalse = false,
      boolTrue = true;

// undefined - когда что то существует, но нет значения

// symbol
// Создаём символ id с описанием (именем) "id"
let id = Symbol("id");
console.log(id.toString());
let user = {
  name: "Вася",
  [id]: 123 // просто "id: 123" не сработает
};

// BigInt новый числовой примитив, который позволяет использовать большие числа с высокой точностью.
// Чтобы создать BigInt, добавьте суффикс n в любой целочисленный литерал. Например, 123 становится 123n.
const max = Number.MAX_SAFE_INTEGER;
BigInt(Number.MAX_SAFE_INTEGER) + 2n;
// Тип BigInt может быть определен с помощью оператора typeof:
typeof 123;
// → 'number'
typeof 123n;
// → 'bigint'

// Объект
const obj = {
    name: 'Xenia',
    age: 26,
    isMarried: false
};

// console.log(obj.name); новый вариант
// console.log(obj['age']); старый вариант

// Массив
let arr = ['tt.png', 'rrr.png', 'rtsf.png', 6, {}, []];

console.log(arr[5]);