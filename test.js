//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 12 Testing and Debugging
////// JavaScript debugging
//// Runtime exeptions
// Chrome Developer Tools

function engageGear(gear) {
    if (gear === "R") { console.log("Reversing"); }
    if (gear === "D") { console.log("Driving"); }
    if (gear === "N") { console.log("Neutral/Parking"); }
    throw new Error("Invalid Gear State");
}
try {
    engageGear("R"); //Reversing
    engageGear("P"); //Invalid Gear State
}
catch (e) {
    console.log(e.message);
}


// Next - Chapter 13 - Reactive promgraming and React 408