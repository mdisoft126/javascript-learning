//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 6 Inheritance

function Figure() {
    this.name = 'figure';
}

function Figure2D() {
    this.name = 'figure2d';
}

function Triangle(side, height) {
    this.name = 'triangle';
    this.side = side;
    this.height = height;
    this.getArea = function() {
        return (this.side * this.height)/2;
    }
}

Figure2D.prototype = new Figure;
Triangle.prototype = new Figure2D;

var t = new Triangle(4, 5);

console.log(t.name);
console.log(t.getArea());

// Page 173;