//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 9 Promises and proxies
////// Proxy
//// Function traps
var car = {
    name: "Ford",
    method_1: function(text) {
        console.log("Method_1 called with " + text);
    }
}

var methodInterceptorProxy = new Proxy(car, {
    get: function(target, propKey, receiver) {
        // I only want to intercept mathod calls, not property access
        var propValue = target[propKey];
        if (typeof propValue != 'function') {
            return propValue;
        } else {
            return function() {
                console.log("intercepting call to " + propKey + " in car " + target.name);
                // target is the object being proxied
                return propValue.apply(target, arguments);
            }
        }
    }
});

methodInterceptorProxy.method_1("Mercedes");

// Next Chaper 10 - The browser environment, page 294