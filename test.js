//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// 6 Inheritance

// shallow copy
function extendCopy(p) {
    var c = {};
    for(var i in p) {
        c[i] = p[i]
    }
    return c;
}

// deep copy
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

// object
var o = {
    name: 'hello',
    num: [1,2,3],
    obj: {
        field: 1,
        desc: 'triangle'
    }
};


var deep = deepCopy(o);
var shallow = extendCopy(o);

console.log(deep);
console.log(shallow);
console.log('\n');

// adding value in deep - everything ok, original object not touched
deep.num.push(4,5,6);
console.log(deep);
console.log(o);
console.log('\n');

// adding value in shallow - using shallow copying, the original object is touched as well
shallow.num.push(4,5,6);
console.log(shallow);
console.log(o);
console.log('\n');

// Page 189 next --> Object()