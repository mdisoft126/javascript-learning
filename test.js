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
    // _split: function _split(sep, lim) {
    //     var result = [], original = this._valueOf();
    //     if (sep === undefined) {
    //         result[0] = original;
    //         console.log("1");
    //         return result;
    //     }
    //     if (lim < 1 && lim > -1) {
    //         console.log("2");
    //         return result;
    //     }
    //     if (sep === " ") {
    //         var j = 0;
    //         var str = '';
    //         console.log("3");
    //         for (var i = 0; i < this._length; i++) {
    //             console.log("4");
    //             if (this._charAt(i) !== " " && i !== this._length -1) {
    //                 str += this._charAt(i);
    //                 console.log("5");
    //             }
    //             else if (i === this._length -1 && this._charAt(i) === " ") {
    //                 result[j] = str;
    //                 j++;
    //                 str = this._charAt(i);
    //                 result[j] = str;
    //                 console.log("6");
    //                 return result
    //             }
    //             else if (i === this._length -1 && this._charAt(i) !== " ") {
    //                 str = this._charAt(i);
    //                 result[j] = str;
    //                 console.log("7");
    //                 return result
    //             }
    //             else {
    //                 result[j] = str;
    //                 j++;
    //                 str = this._charAt(i);
    //                 result[j] = str;
    //                 j++;
    //                 str = ''
    //                 console.log("8");
    //             }
    //         }
    //     }
    // }
    _split: function split(re, l) {
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
                console.log("1");
            } else {
                len = this._length;
                console.log("2");
            }
        } catch {
            len = this._length;
            console.log("3");
        }

        console.log("4");
        
        if (re === undefined) {
            result.push(original);
            return result;
        } else if (re === '') {
            for (index = 0; index < this._length; index++) {
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

        while (match = re.exec(original)) {
            result.push(this._slice(index, match.index));
            // result.push(original._slice(index, match.index));
            index = match.index + new MyString(match[0])._length;
        }
        result.push(this._slice(index));
        return result;
    }
}


var a = new MyString("Hello, how are you doing Today?");
// console.log(a._value);
// console.log(typeof a._value);
// console.log(a[1]);
// console.log(a._length);
// console.log(typeof a);
// console.log(typeof a._valueOf());
// console.log(typeof a._toString());
// console.log(a._charAt(1));
// console.log(a._concat(' world'));
// console.log(a._slice(-5,-2));

var limiter = g;

if (Number.isInteger(limiter)){
} else {
    limiter = ''; 
}

console.log(a._split('', limiter));


// Next Appendix E: Answers to Exercise Questions // page 487

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip