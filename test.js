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

var glob;
var r = /(.*)@(.*)\.(.*)/;
var callback = function() {
    glob = arguments;
    return arguments[1] + ' on the server ' + arguments[2] + ' dot ' + arguments[3];
}
var eMail = 'mdisoft126@wp.pl';
console.log(eMail.replace(r, callback));
console.log(glob);
console.log(typeof callback);
// Page 145 replace callback
