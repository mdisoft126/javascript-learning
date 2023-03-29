//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 5 from new book and then continue from 8

////// Classes and Modules
//// Modules // there is need to change file extension into .mjs in both main an library files

//// Exports and imports

// import from library
import { sayHello, sayGoodbye } from "./libraryGreetings.mjs";
import libraryMessage from "./libraryMessage.mjs";

// use methods
sayHello("Lusia");
sayGoodbye("Lusia");

// use message
console.log(libraryMessage);


// Next Chaper 8 - Summary 275