//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// Summary

////// Case study: we draw shapes
//// Based on the points on coordinate axis there will be drawn shape (using canvas library)

// Constructor Point --> set points needed later to create a shape
function Point(x, y) {
    this.x = x;
    this.y = y;
}

// Constructor Line --> calculation of discance between points (a2 + b2 = c2)
function Line(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
    this.length = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p1.y, 2));
}

// Constructor Shape
function Shape() {
    this.points = [];
    this.lines = [];
    this.init();
}

// Methods of Shape prototype
Shape.prototype = {
    // set indicator for constructor
    constructor: Shape,
    // initialization - set indicator this.context for canvas object
    init: function() {
        if (typeof this.context === 'undefined') {
            var canvas = document.getElementById('canvas');
            Shape.prototype.context = canvas.getContext('2d');
        }
    },
    // a method that draws a figure using a loop through points
    draw: function() {
        var ctx = this.context;
        ctx.strokeStyle = this.getColor();
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (var i = 1; i < this.points.length; i++) {
            ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.closePath();
        ctx.stroke();
    },
    // a method that generate a random color
    getColor: function() {
        var rgb = [];
        for (var i = 0; i < 3; i++) {
            rgb[i] = Math.round(255 * Math.random());
        }
        return 'rgb(' + rgb.join(',') + ')';
    },
    // method which goes through the table of points
    // it creates Line instances and add them to this.line
    getLines: function() {
        if (this.lines.length > 0) {
            return this.lines;
        }
        var lines = [];
        for (var i = 0; i < this.points.length; i++) {
            lines[i] = new Line(this.points[i], (this.points[i+1]) ? this.points[i+1] : this.points[0]);
        }
        this.lines = lines;
        return lines;
    },
    // a method that calcuate an area - it is implemented by particular children
    getArea: function() {},
    // a method that calculate circumference by summing all sides lengths
    getPerimeter: function() {
        var lines = this.getLines();
        var perim = 0;
        for (var i = 0; i < lines.length; i++) {
            perim += lines[i].length;
        }
        return perim;
    }
}

//// Children constructors
// Triangle
function Triangle(a, b, c) {
    this.points = [a, b, c];
    this.getArea = function() {
        var p = this.getPerimeter();
        var s = p / 2;
        return Math.sqrt(s 
            * (s - this.lines[0].length)
            * (s - this.lines[1].length)
            * (s - this.lines[2].length)
        );
    };
}

// Rectangle
function Rectangle(p, side_a, side_b) {
    this.points = [
        p,                                      // top left
        new Point(p.x + side_a, p.y),           // top right
        new Point(p.x + side_a, p.y + side_b),  // down right
        new Point(p.x, p.y + side_b)            // down left
    ];
    this.getArea = function() {return side_a * side_b};
}

/////// next --> square constructor



// Page 202 next --> Case study: we draw shapes --> Shaoe constructor