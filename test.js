//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Array
//// The Array.prototype members

// length

// concat(i1,i2,i3..)
var a = [1,2,3];
var b = [4];
var c = [5,6,7];

console.log(a.concat(b, c));

// join(separator)
console.log(a.join());
console.log(a.join('|'));
console.log(a.join(' is less than '));

// pop()
console.log(c);
console.log(c.pop());
console.log(c);

// push(i1,i2,i3..)
console.log(b.push('hello', 1,2,3));
console.log(b);

// reverse()
console.log(a.reverse());

// shift()
console.log(b);
console.log(b.shift());
console.log(b);

// slice(start_index, end_index)
console.log(b.slice(0,2));
console.log(b);

// sort(callback)
function customSort(a, b) {
    if (a > b) {return 1};
    if (a < b) {return -1};
    return 0;
}

var a = [101, 99, 1, 5];
console.log(a.sort());
console.log(a.sort(customSort));

// splice(start_index, delete_count, i1,i2,i3...)
var a = [1,2,3,4,5];
console.log(a.splice(2,2,'hello', 'elo', 'semanelo'));
console.log(a);

// unshift(i1,i2,i3..)
var a = [1,2,3];
console.log(a.unshift("hello", "ziom"));
console.log(a);

// Next ECMAScript 5 additions to Array 443