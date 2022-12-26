//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////
var a = new String("HelloJavaScriptWorld");
function replaceCallback(match) {
    return "_" + match.toLowerCase();
}
console.log(a.replace(/[A-Z]/g, replaceCallback));


// Page 145 replace callback
