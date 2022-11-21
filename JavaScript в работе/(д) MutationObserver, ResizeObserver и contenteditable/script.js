'use strict';

const box = document.querySelector('.box');


let observer =  new MutationObserver(mitationRecords => {
    console.log(mitationRecords);
});

observer.observe(box, {
    childList: true
});


observer.disconnect();