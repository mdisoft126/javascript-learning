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

//


// Page 202 next --> Case study: we draw shapes --> Shaoe constructor