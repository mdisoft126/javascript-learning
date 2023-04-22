//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 11 Coding and Design Patterns
////// Desing patterns
//// Singleton 2 pattern

// example constructor
function Logger() {
  this.log = function(message) {
    console.log(message);
  };
}

var my_log = new Logger();
my_log.log('some event');
// ... 1000 lines of code later in a different scope ...
var other_log = new Logger();
other_log.log('some new event');
console.log(other_log === my_log); // true !!!! but it returns false for me----->>>>

// Next Design patterns 377