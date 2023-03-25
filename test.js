//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 5 from new book and then continue from 8

////// ES6 Iterators and Generators
//// Iterators and iterables
// Collections

// Map

//create simple map
const m = new Map();
m.set("first", 1);
console.log(m.get("first"));

// other examples of map
console.log(m.has("first"));
m.delete("first");
console.log(m.has("first"));

m.set("foo", 1);
m.set("bar", 2);
console.log(m.size);

m.clear();
console.log(m.size);

// creating by using iterable pairs
const m2 = new Map([
    [1, "hey"],
    [2, "co"],
    [3, "tam?"]
]);
console.log(m2);
console.log(m2.get(1));
console.log(m2.get(2));
console.log(m2.get(3));

// creating by chain
const m3 = new Map().set(1, "hhjd").set(2, "hhgfds").set(3, "whgd");
console.log(m3);

// can include any type of key, even objec
var obj = {};
const m4 = new Map([
    [1, "hey"],
    [2, "co"],
    [obj, "tam?"]
]);
console.log(m4);
console.log(m4.has(obj));

// Next // Collections 195