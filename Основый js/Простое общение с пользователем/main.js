"use strict";

// alert('hello');

// const result = confirm('how are you?');
// const answer = prompt("Вам есть 18?", "");
// const answer = +prompt("Вам есть 18?", ""); //получим число а не строку через +
// console.log(answer + 10);

const answers = [];

answers[0] = prompt('Имя?', '');
answers[1] = prompt('Фамилия?', '');
answers[3] = prompt('Возраст?', '');

document.write(answers);