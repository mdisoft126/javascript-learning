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
    valueOf: function valueOf() {
        return this._value;
    },
    toString: function toString() {
        return this.valueOf();
    },
    charAt: function charAt(index) {
        // return this[parseInt(index, 10) || 0];
        if (this[parseInt(index, 10)]) {
            return this[parseInt(index, 10)];
        }
        else {
            return "Wrong data type. Give a number";
        }
    }
}


var a = new MyString(123);
console.log(a._value);
console.log(typeof a._value);
console.log(a[1]);
console.log(a._length);
console.log(typeof a);
console.log(typeof a.valueOf());
console.log(typeof a.toString());
console.log(a.charAt('l'));

// Next Appendix E: Answers to Exercise Questions // page 487

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip