//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Object
//// ECMAScript 5 additions to objects

////// Object.getPrototypeOf(obj)
//// ES3 --> isPrototypeOf

//Create a constructor function
function Person(name) {
    this.name = name;
}

// create an object from the constructor function
var person1 = new Person("John");

// check if person1 is an istance of Person using is PrototypeOf()
console.log(Person.prototype.isPrototypeOf(person1));

//// ES5 --> getPrototypeOf

//Create a constructor function --> it is already created above

// create an object from the constructor function
var person2 = new Person("Nick");

// check if person1 is an istance of Person using is PrototypeOf()
console.log(Object.getPrototypeOf(person2));
console.log(Array.prototype);


// Next - ECMAScript 5 additions to objects page 433