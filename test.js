//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// 6 Inheritance

function deepCopy(p, c) {
    var c = c || {};
    for(var i in p) {
        if (typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i]);
        } else {
            c[i] = p[i];
        }
    }
    return c;
}

var o = {
    name: 'hello',
    obj: {
        field: 1,
        desc: 'triangle'
    }};

console.log(deepCopy(o));

// Page 187 next --> Deep copying- in progress