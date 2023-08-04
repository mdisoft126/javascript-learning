//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// JSON
//// Members of the JSON object

// parse(text, callback)

var data = '{"hello": 1, "hi": [1,2,3]}';
console.log(data);
console.log(typeof data);
console.log(data.hello);

var parsedData = JSON.parse(data);
console.log(parsedData);
console.log(typeof parsedData);
console.log(parsedData.hello);
console.log(parsedData.hi);

console.log("//////////////");

function callback(key, value) {
    console.log(key, value);
    if (key === 'hello') {
        return 'bonjour';
    }
    if (key === 'hi') {
        return undefined;
    }
    return value;
}

var o = JSON.parse(data, callback);
console.log(o.hello);
console.log(o.hi);
console.log("hi" in o);
console.log("hello" in o);



// Next Members of the JSON object page 471

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript