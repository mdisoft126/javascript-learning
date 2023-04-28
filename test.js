//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 11 Coding and Design Patterns
////// Desing patterns
//// Observer pattern
// observer v1

// observer mix-in object that contains all the subscription-related methods
// and can be used to turn any object into a publisher
var observer = {
  addSubscriber: function(callback) {
    if (typeof callback === 'function') {
      this.subscribers[this.subscribers.length] = callback;
    }
  },
  removeSubscriber: function(callback) {
    for (var i = 0; i < this.subscribers.length; i++) {
      if (this.subscribers[i] === callback) {
        delete this.subscribers[i];
      }
    }
  },
  publish: function(what) {
    for (var i = 0; i < this.subscribers.length; i++) {
      if (typeof this.subscribers[i] === 'function') {
        this.subscribers[i](what);
      }
    }
  },
  make: function(o) { // turns an object into publisher
    for (var i in this) {
      if (this.hasOwnProperty(i)) {
        o[i] = this[i];
        o.subscribers = [];
      }
    }
  }
}

//// implementation

// create a publisher
var publisher = {};
observer.make(publisher);
console.log(publisher);

// Create some subscriber functions
function logMessage(message) {
  console.log("log: " + message);
}

function showAlert(message) {
  console.log("alert: " + message);
}

// Add the subscribers to the publisher
publisher.addSubscriber(logMessage);
publisher.addSubscriber(showAlert);

// Publish a message
publisher.publish("Hello");

// Remove one of the subscribers
publisher.removeSubscriber(showAlert);

// Publish another message
publisher.publish("Hello elo");


// Next - Finish observer pattern based on example implemantation from GTP. Next do the same but with implementation from the book 386