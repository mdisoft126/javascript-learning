//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line
// shift + ctrl + k --> remove line

////// multiplication table
//// header
var res = '';
for (i = 0; i <= 10; i++) {
    if (i == 0) {
        res += i;
    } else {
        res += '    ';
        res += i;
    }
}
console.log(res + '\n');
//// main
var res = '';
for (i = 1; i <= 10; i++) {
    res += i;
    for (j = 1; j <= 10; j++) {
        res += '    ';
        res += (i * j);
    }
    res += '\n' + '\n';
}
console.log(res);
////
// Page 72 --> do the exercise 3!