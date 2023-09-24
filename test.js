//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix E: Answers to Exercise Questions
////// Chapter 5, Prototype
//// 6 -  randomize array elements

Array.prototype.shuffle = function() {
    return this.sort(function () {
        return Math.random() - 0.5;
    })
}

var a = [1,2,3,4,5,6,7,8,9,10];
console.log(a.shuffle());


// Next

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip