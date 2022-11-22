'use strict';

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');


function calckOrDouble(number, basis = 2) {
    console.log(number * basis);
}


calckOrDouble(3, 5);