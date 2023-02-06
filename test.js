//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// 6 Inheritance

//// Summary

////// 4. Copying prototype fields 
// function copyFields()
function copyFields(Child, Parent) {
    var c = Child.prototype;
    var p = Parent.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
}

// Parent
function Shape() {
    this.name = 'shape';
    this.info = 'lololo'
}
Shape.prototype.size = 4;
Shape.prototype.toString = function() {return this.name};
Shape.prototype.tab = [1, 2, 3];

// Child
function Shape2d() {
    this.name = 'shape2d';
}

copyFields(Shape2d, Shape);

var a = new Shape2d();
console.log(a.name); // result: shape2d --> name from its own
console.log(a.info); // reult: undefined --> this method copy only prototypes. So tere is no access to parent's own fields!!!!!!!
console.log(a.size); // result: 4 --> value from paren't prototype
console.log(a.tab);- // result: [1, 2, 3]
console.log('\n');

Shape2d.prototype.size = 6; ////// using this method we can't overwrite the simple parent's value
Shape2d.prototype.tab.push(4, 5, 6); ////// adding new values to the tab field

var b = new Shape();
console.log(b.size); // result: 4 --> it is not overwritten because size is a simple type of value
console.log(b.tab); // result: [1, 2, 3, 4, 5, 6] --> it was overwritten because for objects and tables there is a reference to the parten't value


// Page 198 next --> 5. Copying all fields (shallow)