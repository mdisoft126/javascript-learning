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
// observer v2 (from book)

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

// create objects
var blogger = {
  writeBlogPost: function() {
    var content = 'Today is ' + new Date();
    this.publish(content);
  }
}

var la_times = {
  newIssue: function() {
    var paper = 'Martians have landed on Earth!';
    this.publish(paper);
  }
}

// turn objects into publisher
observer.make(blogger);
observer.make(la_times);

console.log(blogger);

// create another two simple objects (potential subscribers)
var jack = {
  read: function(what) {
    console.log("I just read that " + what);
  }
};

var jill = {
  gossip: function(what) {
    console.log("You didn't hear it from me, but " + what);
  }
};

// add subscribers to blogger
blogger.addSubscriber(jack.read);
blogger.addSubscriber(jill.gossip);

// blogger wrote a post
blogger.writeBlogPost();

// jill remove subscribtion from blogger
blogger.removeSubscriber(jill.gossip);
blogger.writeBlogPost();

// jill subscribe la_times
la_times.addSubscriber(jill.gossip);
la_times.newIssue();


// Next - Chapter 12: Testing and Debugging 389