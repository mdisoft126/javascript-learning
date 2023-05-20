//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Array
//// TECMAScript 5 additions to Array

//// Logger

var logger = console.log.bind(console);

//// forEach
// var car = ["audi", "ford", "volvo"];

// car.forEach(logger);


//// normal function
carNames(logger);

function carNames(logger) {
    var car = ["audi", "ford", "volvo"];
    var result = "";

    for (var i = 0; i < car.length; i++) {
        if (i === car.length-1) {
            result += car[i];
        } else {
            result += car[i] + "\n";
        }
    }
    // return result;
    logger(result);
}

// Next ES6 addition to arrays 447