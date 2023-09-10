//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix E: Answers to Exercise Questions
////// Chapter 4, Objects
//// 6

// MyArray()

function MyArray(length) {
    if (typeof length === 'number' && arguments[1] === undefined) {
        this.length = length;
        return this;
    }

    this.length = arguments.length;
    for (var i = 0, len = arguments.length; i < len; i++) {
        this[i] = arguments[i];
    }
    return this;
}

MyArray.prototype = {
    constructor: MyArray,
    join: function _join(glue) {
        var result = '';
        if (glue === undefined) {
            glue = ',';
        }
        
    }
}

var a = new MyArray('he', 'hello', 'hey');
console.log(a);
console.log(a.length);
console.log(typeof a);



// Next Appendix E: Answers to Exercise Questions

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip