//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// 6 Inheritance

//// Summary

////// 3. Temporary constructor
// function tempConstructor
function tempConstructor(Child, Parent) {
    function F() {}; ////// --> remporary constructor
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
}

function Parent() {};
Parent.prototype.name = 'parent';
Parent.prototype.toString = function() {return this.name};

function Child() {};
Child.prototype.name = 'child'

tempConstructor(Child, Parent);

var a = new Child();
console.log(a.name);
console.log(a.toString());


//////  /////////////////////////// finish this one!!!!!!!!!!!!!!!!!!!!!!!


// Page 198 next --> Copying prototype fields 