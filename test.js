//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 5 from new book and then continue from 8

////// Classes and Modules
//// 

// using proptotypes
var Person = function(firstname) {
    if(!(this instanceof Person)) {
        throw new Error("Person is a contructor");
    }
    this.firstname = firstname;
}

Person.prototype.giveBirth = function() {
    // .. code for giving birth
}

var Employee = function(firstname, lastname, job) {
    if(!(this instanceof Employee)) {
        throw new Error("Employee is a contructor");
    }
    Person.call(this, firstname);
    this.lastname = lastname;
    this.job = job;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.startJob = function() {
    // .. code for employee start job
}

var Engineer = function(firstname, lastname, job, department) {
    if(!(this instanceof Engineer)) {
        throw new Error("Engineer is a contructor");
    }
    Engineer.call(this, firstname, lastname, job);
    this.department = department;
}

Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.constructor = Engineer;
Engineer.prototype.startWorking = function() {
    // .. code for start working
}

// using ES6 classes syntax
class Person {
    constructor(firstname) {
        this.firstname = firstname;
    }
    giveBirth() {
        // .. a person is born
    }
}

class Employee extends Person {
    constructor(firstname, lastname, job) {
        super(firstname);
        this.lastname = lastname;
        this.job = job;
    }
    startJob() {
        // .. an empoyee starts job
    }
}

class Engineer extends Employee {
    constructor(firstname, lastname, job, department) {
        super(firstname, lastname, job);
        this.department = department;
    }
    startWorking() {
        // .. an engineer starts working
    }
}


// Next Chaper 8 - Classes and modules page 262