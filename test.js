//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 9 Promises and proxies

////// callback
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

////// propmise // the same exercise but using promise
// array with numbers
const myNumbers2 = [-4,-6,-7];

// removing function
function myRemovingPromise(numbers) {
    return new Promise(
        function (resolve, reject) {
            const myArray = [];
            for (const x of numbers) {
                if (x >= 0) {
                    myArray.push(x);
                }
            }
            if (myArray.length > 0) {
                resolve(myArray)
            } else {
                reject("No values above or equal 0");
            }
        }
    )
}

myRemovingPromise(myNumbers2).then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
);

// Next Chaper 10 - The browser environment, page 294