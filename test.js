//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////
try {
    hello();
} catch (e) {
    console.log(e.name + ": " + e.message);
} finally {
    console.log("The end!");
}

function f() {
    return 0;
}

try {
    var total = f();
    if(total === 0) {
        throw new Error('Dividing by O!');
    } else {
        console.log(50/total);
    }
} catch (e) {
    console.log(e.name + ": " + e.message);
} finally {
    console.log('The end!');
}

try {
    var total = f();
    if(total === 0) {
        throw new RangeError('Dividing by O!');
    } else {
        console.log(50/total);
    }
} catch (e) {
    console.log(e.name + ": " + e.message);
} finally {
    console.log('The end!');
}

try {
    var total = f();
    if(total === 0) {
        throw {
            name: "My error",
            message: "Something bad happened"
        };
    } else {
        console.log(50/total);
    }
} catch (e) {
    console.log(e.name + ": " + e.message);
} finally {
    console.log('The end!');
}

try {
    var total = f();
    if(total === 0) {
        throw new Error('Dividing by O!');
    } else {
        console.log(50/total);
    }
} catch (e) {
    console.log(e);
} finally {
    console.log('The end!');
}

// Page 151 exercises
