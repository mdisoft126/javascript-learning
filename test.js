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
    _join: function _join(glue) {
        var result = '';
        if (glue === undefined) {
            glue = ',';
        }
        for (var i = 0; i < this.length -1; i++) {
            result += this[i] === undefined ? '' : this[i];
            result += glue;
        }
        result += this[i] === undefined ? '' : this[i];
        return result;
    },
    _toString: function _toString() {
        return this._join();
    },
    _push: function _push() {
        for (var i = 0; i < arguments.length; i++) {
            this[this.length + i] = arguments[i];
        }
        this.length += arguments.length;
        return this.length;
    },
    _pop: function _pop() {
        delete this[this.length -1];
        this.length = this.length -1;
        return this.length;
        // var popLen = this.length -1;
        // delete this[popLen];
        // this.length = popLen;
        // return this.length;
    }
}

var a = new MyArray('he', 'hello', 'hey');
console.log(a);
console.log(a.length);
console.log(typeof a);
console.log(a._join());
console.log(a._join(' test '));
console.log(a._toString());
console.log(a._push('abc', 'nnn', 'lol'));
console.log(a._toString());
console.log(a._pop());
console.log(a._toString());
console.log(a._pop());
console.log(a._toString());


// Next Appendix E: Answers to Exercise Questions

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip