"use strict";

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    setTimeout(function() {
        console.log(2);
    });
}

first();
second();

function learnJS(lang, callback) {
    console.log(`я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');
}

// learnJS('JS', function() {
//     console.log('Я прошел этот урок');
// });

learnJS('JS', done);