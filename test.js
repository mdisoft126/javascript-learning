//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 5 from new book and then continue from 8

////// Classes and Modules
//// Subclassing

//// Mixins (based on book)
//
class Person {
    saying() {
        console.log("I am person");
    }
}

const Check = (Tools) => class extends Tools {  // a parameter can be with or without brackets (). In this case we have (Tools) be we can have also Tools like below
    check() {
        console.log("checking");
    }
}

const Onboard = Tools => class extends Tools {
    onboarding() {
        console.log("onboarding");
    }
}

class Employee extends Check(Onboard(Person)) {}    // it means that Employee is a subclass of Check, which in turn is a subclass of Onboardm
                                                    // which in turn is a subclass of Person
// create an instance and call the methods
const p = new Employee();
p.saying();
p.check();
p.onboarding(); 



// Next Chaper 8 - Modules 272