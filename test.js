//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 9 Promises and proxies
////// Proxy
// handler
var handler = {
    get: function(target, name) {
        return name in target ? target[name] : 42;
    }
}

//// example 1 - using handler with an object literal
var obj = {a:1, b:2};

let proxy = new Proxy(obj, handler);

console.log(proxy.a);   // 1
console.log(proxy.c);   // should be deafault value = 42 because propery c doesn't exist

//// example 2 - using handler with a class
class myClass {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

let obj2 = new myClass(3, 5);

let proxy2 = new Proxy(obj2, handler);

console.log(proxy2.a);
console.log(proxy2.c);

//// example 3 - using handler with an array
let myArray = [2, 5, 7];

let proxy3 = new Proxy(myArray, handler);

console.log(proxy3[0]);
console.log(proxy3[3]);

//// example 4 - empty target
var p = new Proxy({}, handler);
p.a = 100;
p.b = "hello";

console.log(p);

console.log(p.a);
console.log(p.c);


// Next Chaper 10 - The browser environment, page 294