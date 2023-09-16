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

// comparison function

function sort(numbers) {
    return Array.prototype.sort.call(numbers, function(a, b) {
        if (a === b) {
            return 0;
        }
        return 1 * (a > b) - 0.5;
    })
}

var arr = [1,5,2,3,4,18,8,7,5,9,2,56,-10,99];

console.log(sort(arr));

// Next Appendix E: Answers to Exercise Questions

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip