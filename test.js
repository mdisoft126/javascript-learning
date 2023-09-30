//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix E: Answers to Exercise Questions
////// Chapter 6, Inheritance
//// 1 -  multiple inheritance with prototypal inheritance pattern

function objectMulti() {
    // craete an empty object to serve as a prototype
    var prototype = {};

    // loop throught the arguments (objects) passed to the function
    for (var i = 0; i < arguments.length; i++) {
        var obj = arguments[i];

        // copy properties from each object's prototype to te prototype object
        for (var prop in obj.prototype) {
            if (obj.prototype.hasOwnProperty(prop)) {
                prototype[prop] = obj.prototype[prop];
            }
        }
    }

    // create a constructor function for the new object
    function Constructor() {}

    // Set the prototype of the constructor to the combined prototype
    Constructor.prototype = prototype;

    // Create an instance of the constructor
    var instance = new Constructor();

    // Add any additional properties to the instance
    if (arguments.length > 0 && typeof arguments[arguments.length -1] === 'object') {
        var additionalProps = arguments[arguments.length-1];
        for (var prop in additionalProps) {
            if (additionalProps.hasOwnProperty(prop)) {
                instance[prop] = additionalProps[prop];
            }
        }
    }

    // Return the instance
    return instance;
}

// Example usage
var obj1 = {
    prototype: {
        method1: function() {
            console.log("Method 1 from obj1");
        }
    }
    // ,additional: "additional from obj1"
}

var obj2 = {
    prototype: {
        method2: function() {
            console.log("Method 2 from obj2");
        }
    }
    ,additional: "additional from obj2"
}

var obj3 = {
    prototype: {
        method2: function() {
            console.log("Method 3 from obj3");
        }
    }
    ,additional: "additional from obj2"
}

var additionalProps = {
    additional: "additional properties"
}

var my = objectMulti(obj1, obj2, obj3, additionalProps);

my.method1();
my.method2();
console.log(my.additional);
console.log(my.hasOwnProperty('additional'));


// page 495



// Next

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip