//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//Exercise 6



function MyMath() {

    // set type of parameter
    /**
    * @param {Boolean} incl - The boolean
    */

    this.rand = function(min, max, incl) {

        // date
        const date = new Date();
        var t = date.getTime() + '';

        // random number
        var r = parseInt(t.slice(-1));

        // main
        var f;
        var res;
        var diff = max - min;
        if (incl === true) {
            if (r === 0) {
                res = parseInt((diff * 0) + min);
            } else {
                f = (r/10);
                res = parseInt(((diff * f) + min +1));
            }
            return res;
        } else {
            if (r === 0) {
                res = parseInt((diff * 0) + min + 1);
            } else if (r === 1) {
                f = (r/10);
                res = parseInt(((diff * f) + min + 1));
            } else {
                f = (r/10);
                res = parseInt(((diff * f) + min));
            }
            return res;
        }
    }
}

var a = new MyMath();
console.log(a.rand(5, 10, true));


// Page 152 exercise 7 in progress --> add functionality for included max