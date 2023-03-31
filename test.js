//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 9 Promises and proxies
////// Promise.all
// const promise1 = Promise.resolve(3);
const promise1 = Promise.reject(3); // rejection for test purpose
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3])
.then((values) => {
    console.log(values);
})
.catch(err => {
    console.log("at least one of the promises failed");
});


// Next Chaper 10 - The browser environment, page 294