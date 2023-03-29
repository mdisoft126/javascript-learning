//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 5 from new book and then continue from 8

////// Classes and Modules
//// Defining Classes

//// Static methods
class Logger {
    static log(level, message) {
        console.log(`${level} : ${message}.`);
    }
}

// invoke static method on the Class
Logger.log("ERROR", "The end is near");

// static method cannot be called by instance of the class
const logger = new Logger();
logger.log("Error", "End"); // logger.log is not a function


// Next Chaper 8 - Static properties page 268