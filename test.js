//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 9 Promises and proxies
////// Proxy
//// Set
// object
const obj = {
    foo: 'bar',
    baz: 'qux'
};

// 1. Preventing certain properties from being set
const proxy = new Proxy(obj, {
    set(target, property, value) {
        if (property === 'baz') {
            throw new Error('Setting "baz" is not allowed.');
        }
        target[property] = value;
    }
});

proxy.foo = 'hello';
// proxy.baz = 'yoy'; // error
console.log(obj);

// 2. Logging property changes
const proxy2 = new Proxy(obj, {
    set(target, property, value) {
        console.log(`Setting ${property} to ${value}`);
        target[property] = value
    }
})

proxy2.foo = 'hej hello';
console.log(obj);

// 3.Preventing new properties from being added
const proxy3 = new Proxy(obj, {
    set(target, property, value) {
        if (!(property in target)) {
            throw new Error("Can't add new property. You can only change values on the existing ones.")
        }
        target[property] = value;
    }
})

proxy3.foo = "helo elo hey";
// proxy3.age = 10; // error
console.log(obj);

// Next Chaper 10 - The browser environment, page 294