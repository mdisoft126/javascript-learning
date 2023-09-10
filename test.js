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
    _slice: function _slice(from, to) {
        var result = '', original = this._valueOf();
        if (from === undefined) {
            return original;
        }
        if (from > this._length) {
            return result;
        }
        if (from < 0) {
            from = this._length + from;
        }
        if (to == undefined || to > this._length) {
            to = this._length;
        }
        if (to < 0) {
            to = this._length + to;
        }
        // slicing loop
        for (var i = from; i < to; i++) {
            result += original[i];
        }
        return result;
    },
    _split: function _split(re, l) {
        var index = 0,
            len,
            result = [], 
            original = this._valueOf(), 
            match, 
            pattern = '', 
            modifiers = 'g';

        try {
            if (l !== undefined && Number.isInteger(l)) {
                len = l;
            } else {
                len = this._length;
            }
        } catch {
            len = this._length;
        }
        
        if (re === undefined) {
            result.push(original);
            return result;
        } else if (re === '') {
            for (index = 0; index < len; index++) {
                result.push(this._charAt(index));
            }
            return result;
        } else if (re instanceof RegExp) {
            // split with regex but always set g
            pattern = re.source;
            modifiers += re.multiline ? 'm' : '';
            modifiers += re.ignoreCase ? 'i' : '';
        } else {
            // not a regexp
            pattern = re;
        }
        re = RegExp(pattern, modifiers);

        var j = 0;

        while ((match = re.exec(original)) && j < len) {
            result.push(this._slice(index, match.index));
            index = match.index + new MyString(match[0])._length;
            j++;
        }
        if (j < len) {
            result.push(this._slice(index));
        }
        return result;
    }
}


var a = new MyString("Hello, how are you doing Today?");
var b = a._split('o', 4);
// console.log(b);

MyString.prototype._join = function _join(d) {
    var result = '';
    var len = this._length;

    if(d === undefined) {
        for (var i = 0; i < len; i++) {
            result += this[i]; 
        }
    } else if (d === '') {
        for (var i = 0; i < len; i++) {
            result += this[i];
            if(i < len -1) {
                result += ",";
            }
        }
    } else {
        for (var i = 0; i < len; i++) {
            result += this[i];
            if(i < len -1) {
                result += d;
            }
        }
    }
    return result;
}

var c = b.join('o');
// console.log(c);

//// version with built-in reverse logic
// MyString.prototype._reverse =  function _reverse() {
//     strResult = ''
//     var result = this._split('')
//     result = result.reverse();
//     for (var i = 0; i < result.length; i++) {
//         strResult += result[i];
//     }

//     return strResult;
// }

//// version with my own reverse logic
MyString.prototype._reverse =  function _reverse() {
    var strResult = '';
    var revResult = [];
    var result = this._split('');
    var revLen = result.length -1;
    var i = 0;

    for (revLen; revLen >= 0; revLen--) {
        revResult[i] = result[revLen];
        i++;
    }

    for (var i = 0; i < revResult.length; i++) {
        strResult += revResult[i];
    }

    return strResult;
}

var d = a._reverse();
console.log(d);


// Next Appendix E: Answers to Exercise Questions // page 487

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip