//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// 6 Inheritance

//// Summary

////// 5. Copying all fields (shallow)
// function shallowCopy
function shallowCopy(p) {
    var c = {};
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
    return c;
}

// grand parent object
var shape = {
    name: 'shape',
    toString: function() {return this.name}
}

// parent object
var shape2d = shallowCopy(shape);
shape2d.name = 'shape2d';
shape2d.toString = function() {return this.uber.toString() + ', ' + this.name};
shape2d.tab = [1, 2, 3];

// child object
var triangle = shallowCopy(shape2d);
triangle.name = 'triangle';
triangle.side = 4;
triangle.height = 8;
triangle.getArea = function() {return this.side * this.height / 2};

//// call
console.log(triangle.name);
console.log(triangle.toString());
console.log(triangle.getArea(4, 8));
console.log(triangle.tab);
console.log('\n');

// overvriting parent's value
triangle.tab.push(4, 5, 6);
console.log(triangle.tab);
console.log('\n');

// checking parent table value
console.log(shape2d.tab); // result: [1, 2, 3, 4, 5, 6] --> the partent't value was ooverwritten. it is a shallow copy then.



// Page 198 next --> 6. Deep copying