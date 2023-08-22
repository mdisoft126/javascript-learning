//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix E: Answers to Exercise Questions
////// Chapter 4, Objects
//// 4

//
function MyString(input) {
    var index = 0;

    // cast to string
    this._value = '' + input;

    // access to array
    // while (input[index] !== undefined) {
    //     this[index] = input[index];
    //     index++;
    // }

    while (this._value[index] !== undefined) {
        this[index] = this._value[index];
        index++;
    }

    // remember the length
    this._length = index;

}

MyString.prototype = {
    constructor: MyString,
    _valueOf: function _valueOf() {
        return this._value;
    },
    _toString: function _toString() {
        return this._valueOf();
    },
    _charAt: function _charAt(index) {
        return this[parseInt(index, 10) || 0];
        // if (this[parseInt(index, 10)]) {
        //     return this[parseInt(index, 10)];
        // }
        // else {
        //     return "Wrong input data type. Give a number";
        // }
    },
    _concat: function _concat() {
        var prim = this._valueOf();
        for (var i = 0; i < arguments.length; i++) {
            prim += arguments[i];
        }
        return prim;
    },
    _slice: function slice() {
        
    }
}


var a = new MyString("hello");
console.log(a._value);
console.log(typeof a._value);
console.log(a[1]);
console.log(a._length);
console.log(typeof a);
console.log(typeof a._valueOf());
console.log(typeof a._toString());
console.log(a._charAt(1));
console.log(a._concat(' world'));

// Next Appendix E: Answers to Exercise Questions // page 487

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip