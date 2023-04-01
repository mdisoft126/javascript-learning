//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 10 The browser environment
////// BOM
//// window.location property
for (var i in location) {
    if (typeof location[i] === "string") {
    console.log(i + ' = "' + location[i] + '"');
    }
}

// next window.frames property page 301

// Next Chaper 11 - Coding and design patterns 357