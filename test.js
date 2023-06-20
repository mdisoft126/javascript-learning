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

// Next Continue with bind example from the page:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind?retiredLocale=pl