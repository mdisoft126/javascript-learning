//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix E: Answers to Exercise Questions
////// Chapter 6, Inheritance
//// 2. Use the canvas example to practice

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function Line(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
    this.lenght = Math.sqrt(
        Math.pow(p1.x - p2.x, 2) +
        Math.pow(p1.y - p2.y, 2)
    );
}

function Shape() {
    this.points = [];
    this.lines = [];
    this.init();
}

Shape.prototype = {
    // reset pointer to constructor
    constructor: Shape,

    // initialization, sets this.context to point to the context if the canvas object
    init: function() {
        if(this.context === undefined) {
            var canvas = document.getElementById("canvas");
            Shape.prototype.context = canvas.getContext("2d");
        }
    },

    // method that draws a shape by looping throught this.points
    draw: function() {
        var i, ctx = this.context;
        ctx.strokeStyle = this.getColor();
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for(i = 1; i < this.points.length; i++) {
            ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.closePath();
        ctx.stroke();
    },

    // method that generate a random color
    getColor: function() {
        var i, rgb = [];
        for (i = 0; i < 3; i++) {
            rgb[i] = Math.round(255 * Math.random());
        }
        return 'rgb(' + rgb.join(',') + ')';
    },

    // method that loops throught the points array,
    // creates Line instances and adds them to this.lines
    getLines: function() {
        if (this.lines.length > 0) {
            return this.lines;
        }
        var i, lines = [];
        for (i = 0; i < this.points.length; i++) {
            lines[i] = new Line(this.points[i], this.points[i +1] || this.points[0]);
        }
        this.lines = lines;
        return lines;
    },

    // shell method to be implemented by children
    getArea: function() {},

    // sums the lengths of all lines
    getPerimeter: function() {
        var i, perim = 0, lines = this.getLines();
        for (i = 0; i < lines.length; i++) {
            perim += lines[i].length;
        }
        return perim;
    }
}

function Triangle(a, b, c) {
    this.points = [a, b, c];
    this.getArea = function () {
        var p = this.getPerimeter(),
        s = p/2;
        return Math.sqrt(s * (s - this.lines[0].length) *
        (s - this.lines[1].length) * (s - this.lines[2].length))
    };
}

(function () {
    var s = new Shape();
    Triangle.prototype = s;
})();

var p1 = new Point(100, 100);
var p2 = new Point(300, 100);
var p3 = new Point(200, 0);

var t = new Triangle(p1, p2, p3);

t.draw();

// after this exercise do an example from gtp

// page 495

// Next

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip