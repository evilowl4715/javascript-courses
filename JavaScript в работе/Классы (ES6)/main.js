'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calckArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(10, 10, 'hello', 'red');

div.showMyProps();
console.log(div.calckArea());

// const square =  new Rectangle(10, 10);
// const long =  new Rectangle(20, 10);

// console.log(square.calckArea());
// console.log(long.calckArea());