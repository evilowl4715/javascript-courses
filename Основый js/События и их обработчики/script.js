'use strict';

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    alert('hi');
});

const hoverBg = (e) => {
    // console.log(e);
    e.target.style.background = 'red';
};

btn.addEventListener('mouseenter', hoverBg);
// btn.removeEventListener('mouseenter', hoverBg);