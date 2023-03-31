//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 9 Promises and proxies
////// Metaprogramming
// Object.key() as an example of introspection
const obj = {
    name: "John",
    myfun() {
        console.log("check message");
    }
}

for (const key of Object.keys(obj)) {
    console.log(key);
}


// Next Chaper 10 - The browser environment, page 294