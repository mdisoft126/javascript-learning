//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 6 Inheritance

function Shape() {};

// prototype extending
Shape.prototype.name = 'figure';
Shape.prototype.toString = function() {
    return this.name;
}

//// good sequence, first inheritance, then prototype extending

// Shape2D
function Shape2D() {};

// inheritance handling
Shape2D.prototype = new Shape();
Shape2D.prototype.constructor = Shape2D;

// prototype extending
Shape2D.prototype.name = 'figure2d';

var a = new Shape2D;
console.log(a.name);

//// wrong sequence, first should be inheritance, then prototype extending

// Shape2D2
function Shape2D2() {};

// prototype extending <<<------ should be after inheritance handling
Shape2D2.prototype.name = 'figure2d';

// inheritance handling
Shape2D2.prototype = new Shape();
Shape2D2.prototype.constructor = Shape2D;

var a = new Shape2D2;
console.log(a.name); // --> in results the name overvrited by Shape's proptotype


// Page 175