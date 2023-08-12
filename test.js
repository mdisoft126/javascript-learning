//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Appendix E: Answers to Exercise Questions
////// Chapter 3, Functions
//// 1

// getRGB("#00ff00")
function getRGB(hex) {
    return "rgb(" +
        parseInt(hex[1] + hex[2], 16) + ", " +
        parseInt(hex[3] + hex[4], 16) + ", " +
        parseInt(hex[5] + hex[6], 16) + ")";
} 

console.log(getRGB("#00ff00"));

// getRGB2("#00ff00") - 2nd version
function getRGB2(hex) {
    hex = hex.replace("#", "");
    var red = parseInt(hex.substring(0, 2), 16);
    var green = parseInt(hex.substring(2, 4), 16);
    var blue = parseInt(hex.substring(4, 6), 16);

    return `RGB(${red}, ${green}, ${blue})`
}

console.log(getRGB2("#00ff00"));

// substring vs slice
var str = "Hello World!";
console.log(str.substring(6, 11));
console.log(str.substring(12, 6));
console.log(str.substring(-3, 6));
console.log("--------");

console.log(str.slice(6,11));
console.log(str.slice(12,6));
console.log(str.slice(-6,-1));
console.log(str.slice(-1,-8));
console.log(str.slice(-8,-1));

// getRGB3()
function getRGB3(hex) {
    var result = [];
    result.push(parseInt(hex.slice(1,3),16));
    result.push(parseInt(hex.slice(3,5),16));
    result.push(parseInt(hex.slice(5),16));
    return "rgb(" + result.join(", ") + ")";
}

console.log(getRGB3("#00ff00"));

// getRGB4()
function getRGB4(hex) {
    var result = [];
    var i = 1, j = 3;
    while (j < 8) {
        result.push(parseInt(hex.slice(i,j),16));
        i += 2;
        j += 2;
    }
    return "rgb(" + result.join(", ") + ")";
}

console.log(getRGB4("#00ff00"));

// Next Appendix E: Answers to Exercise Questions //

// Must be done after Command line and python!
// https://developer.mozilla.org/en-US/docs/Web/JavaScrip