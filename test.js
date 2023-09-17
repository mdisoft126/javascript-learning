//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix E: Answers to Exercise Questions
////// Chapter 4, Objects
//// 7

// MyMath()

var MyMath = (function() {

    function isArray(ar) {
        return Object.prototype.toString.call(ar) === '[object Array]';
    }

    function sort(numbers) {
        return Array.prototype.sort.call(numbers, function(a, b) {
            if (a === b) {
                return 0;
            }
            return 1 * (a > b) - 0.5;
        });
    }

    return {

        PI: 3.14,
        E: 2.71,
        LN10: 2.30,
        LN2: 0.69,

        max: function max() {
            var numbers = arguments;
            if (isArray(numbers[0])) {
                numbers = numbers[0];
            }
            return sort(numbers)[numbers.length - 1];
        },

        min: function min() {
            var numbers = arguments;
            if (isArray(numbers[0])) {
                return this.min.apply(this, numbers[0]);
            }
            var min = numbers[0];
            for (var i = 1; i < numbers.length; i++) {
                if (min > numbers[i]) {
                    min = numbers[i];
                }
            }
            return min;
        },

        rand: function rand(min, max, inclusive) {
            if (inclusive) {
                return Math.round(Math.random() * (max - min) + min);
            }
            return Math.floor(Math.random() * (max - min -1) + min + 1);
        }
    }
})();

console.log(MyMath.max(1,6,2,9,12,44,2));
console.log(MyMath.min(6,2,9,1,12,44,2));
console.log(MyMath.min([6,2,9,1,12,44,2]));
console.log(MyMath.max([6,2,9,1,12,44,2]));

console.log(MyMath.rand(1,10,true));
console.log(MyMath.rand(1,10,false));


// Next Appendix E: Answers to Exercise Questions

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip