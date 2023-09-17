//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix E: Answers to Exercise Questions
////// Chapter 5, Prototype
//// 1

var shape = {
    type: 'shape',
    getType: function() {
        return this.type;
    }
}

console.log(shape.type);
console.log(shape.getType());


// Next

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip