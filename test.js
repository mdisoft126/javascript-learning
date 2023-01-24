//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

// 6 Inheritance

//////// Out of the book --> Question mark operator

//// 1. Ternary operator

var temp = 35;
var tempState = temp > 30 ? "Warm" : "Cold";
console.log(tempState);

//// 2. Optional Chaining

var user = {
    name: "Alex",
    age: 24,
    tell: function() {
        return 1000;
    }
}

// console.log(user.salary?.()); // expecting output: undefined //// working only since Node 14

//// 3. Nullish Coalescing

// option with or ||

var a = {
    name: undefined || 'N/A',
    color: undefined || 'Some description',
    species: 'fish' || 'Unknown species'
}
console.log(a.name);
console.log(a.color);
console.log(a.species);

// but

var b = {
    name: '' || 'N/A',
    age: 0 || 24
}

console.log(b.name); // we expect '' but got 'N/A'
console.log(b.age); // we expect 0 but got 24

// so in that case better use ??

var c = {
    name: undefined ?? 'N/A',
    color: '' ?? 'N/A',
    age: 0 ?? 30
}

console.log(c.name); // expecting output: 'N/A' //// working only since Node 14
console.log(c.color); // expecting output: '' //// working only since Node 14
console.log(c.age); // expecting output: 0 //// working only since Node 14


// Page 180 --> next Uber: access to the parent-object