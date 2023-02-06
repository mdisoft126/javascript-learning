//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//// 6 Inheritance

//// Summary

////// 6. Deep copying
// function deepCopying
function deepCopying(p, c) {
    var c = c || {};
    for (var i in p) {
        if (typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopying(p[i], c[i]);
        } else {
            c[i] = p[i];
        }
    }
    return c;
}

// parent
var shape = {
    name: 'shape',
    tab: [1, 2, 3],
    toString: function() {return this.name},
}

// child
var triangle = deepCopying(shape);
console.log(triangle.name = 'triangle');
triangle.tab.push(4, 5, 6);

// call
console.log(triangle.name);
console.log(triangle.toString());
console.log(triangle.tab);
console.log('\n');

// // check if parent was overwritten
console.log(shape.tab); // result: [1, 2, 3] --> parent's value was not overwritten



// Page 198 next --> 7. Prototype inheritance