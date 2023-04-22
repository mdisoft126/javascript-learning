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

// // example constructor
// function Logger() {
//   this.log = function(message) {
//     console.log(message);
//   };
// }

// // Global variable - constructor
// function Logger() {
//   if (typeof global_log === 'undefined') {
//     global_log = this;
//   }
//   return global_log;
// }

// var my_log = new Logger();
// my_log.log('some event');
// // ... 1000 lines of code later in a different scope ...
// var other_log = new Logger();
// other_log.log('some new event');
// console.log(other_log === my_log); // true !!!! but it returns false for me----->>>>

//// example of implementation Gloabal variable

function Logger() {
  // Check if the global instance of the Logger object has already been created
  if (typeof global_log === 'object') {
    return global_log;
  }

  // Create a new instance of the Logger object
  var instance = this;
  
  // Private variables and functions
  var logs = [];
  
  function log(message) {
    logs.push(message);
    console.log(message);
  }
  
  // Public methods
  instance.log = log;
  instance.getLogs = function() {
    return logs;
  };
  
  // Set the global variable to reference the new instance
  global_log = instance;
  
  // Return the new instance
  return instance;
}

// Usage example
var logger1 = new Logger();
logger1.log('Message 1');
console.log(logger1.getLogs()); // Output: ["Message 1"]

// Create a new logger instance and test if it's the same as the first one
var logger2 = new Logger();
console.log(logger1 === logger2); // Output: true

logger2.log('Message 2');
console.log(logger1.getLogs()); // Output: ["Message 1", "Message 2"]
console.log(logger2.getLogs()); // Output: ["Message 1", "Message 2"]


// Next Propety of the constructor 379