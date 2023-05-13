//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix C: Built-in Objects
////// Object
//// ECMAScript 5 additions to objects

// ES5 data descriptor and accessor description in more practical example
// First code block - fixed value
var person1 = {};
Object.defineProperty(person1, "legs", {
  value: 2,
  writable: true,
  configurable: true,
  enumerable: true
});

// Set legs to 4
person1.legs = 4;

// Output the value of legs
console.log(person1.legs); // 2 - fixed value is not overwritten

// Second code block - custom logic
var person2 = {};
Object.defineProperty(person2, "legs", {
  set: function(v) {
    if (v >= 0 && v <= 4) {
      this._legs = v;
    }
  },
  get: function() {
    return this._legs || 2;
  },
  configurable: true,
  enumerable: true
});

// Set legs to 3
person2.legs = 5;

// Output the value of legs
console.log(person2.legs); // 3 - custom logic is applied


// Next - ECMAScript 5 additions to objects page 433