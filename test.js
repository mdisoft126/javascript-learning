//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 9 Promises and proxies
////// Proxy
// handler using set method - age validator
let ageValidator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError("The age is not a number");
            }
            if (value > 100) {
                throw new RangeError("You can't be older than 100");
            }
        }
        // if no error - just store the value in the property
        obj[prop] = value;
    }
};

// initiate object
let p = new Proxy({}, ageValidator);
p.age = 100;
p.age = 90;
p.gender = 'man';
console.log(p);


// Next Chaper 10 - The browser environment, page 294