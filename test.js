//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//Exercise 6

function MyMath() {

    this.rand = function(min, max) {

        // date
        const date = new Date();
        var t = date.getTime() + '';

        // random number
        var r = parseInt(t.slice(-1));

        // factor
        var f;
        var res;
        var diff = max - min;
        if (r === 0) {
            res = parseInt((diff * 0) + min);
        } else {
            f = (r/10);
            res = parseInt(((diff * f) + min));
        }
        return res;
    }
}

var a = new MyMath();
console.log(a.rand(5,10));


// Page 152 exercise 7 in progress --> add functionality for included max