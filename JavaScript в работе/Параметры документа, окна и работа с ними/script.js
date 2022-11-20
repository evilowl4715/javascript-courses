'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
});

const style = window.getComputedStyle(box);