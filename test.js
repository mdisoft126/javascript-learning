//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 11 Coding and Design Patterns
////// Coding patterns
//// Namespaces

// var MyVariables = "hello"; // commented for testing purpose
// console.log(MyVariables);

// if the variable exists before then it is not overwrited. But if no, there is created object.
var MyVariables = MyVariables || {};

MyVariables.name = "Marcin";
MyVariables.myFunction = function() {
    console.log("say hello!");
}

console.log(MyVariables.name);
MyVariables.myFunction();

// Next