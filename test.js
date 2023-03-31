//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 9 Promises and proxies

////// javascript call stack
// array with numbers
const myNumbers = [1,4,-2,5,4,-10,-7,3];

// removing function
function removeNeg(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }
    console.log(myArray);
}

// calling removing function
removeNeg(myNumbers, (x) => x >= 0);




// Next Chaper 10 - The browser environment, page 294