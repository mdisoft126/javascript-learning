//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Function
//// ECMAScript 5 additions to a Function
//// bind

const myModule = {
    x: 42,
    getX: function() {
        return this.x;
    }
};

const unboundedGetX = myModule.getX;
console.log(unboundedGetX());

// using bind
const boundedGetX = myModule.getX.bind(myModule);
console.log(boundedGetX());

// creating new bound function
function myLog(...args) {
    console.log(this, ...args);
}

myLog(0, 0);
const boundLog = myLog.bind("this value", 1,2);
boundLog();
const boundLog2 = boundLog.bind("this value 2", 3,4);
boundLog2(5, 6);


// Next Continue with bind example from the page:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind?retiredLocale=pl