//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////
var a = [0, 0 , 0, 0, 0, 0, 0];
for(i = 2022; i <= 2032; i++) {
    a[new Date(i , 3, 3).getDay()]++;
}

console.log(a);

// Page 140 Finish loop
