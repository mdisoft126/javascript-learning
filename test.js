//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

//Exercise 4

function MyString(input) {
    var i;
    var r = [];
    for (i = 0; i < input.length; i++) {
        r[i] = input[i];
    }
    this.length = r.length;
    return this.result = r;
    this.toString = function() {
        var j;
        var r2 = "";
        for (j = 0; j < input.length; j++) {
            r2 += r[j];
        };
        return r2;
        // return input;
    }
    // return this.result = r;
};

var s = new MyString('hello');
console.log(s.length);
console.log(s[0]);
console.log(s.toString());


///////
// function Dog(name) {
//     this.name = name;
//     this.bark = function() {
//         return "hau hau";
//     }
// }

// var d = new Dog('max');
// console.log(d.name);
// console.log(d.bark());

//// Answer:

// Page 151 exercise 4 ---> finish exercise 4 because something is still wrong with toString method
