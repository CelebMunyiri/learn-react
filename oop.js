'use strict';
//Javascript object oriented programming
//before object oriented programming, we used procedural programming
//Object oriented programming is concerned on four things namely
//Abstraction
//Inheritance 
//Polymorphism
//Encapsulation
//oop solves spagheti code where there is too much depedency within functions in a code
//example of oop
/*
//way 1. procedural
let baseSalary=30000
let overtime=10
let rate=20


function getWage(baseSalary,overtime,rate){
    return baseSalary+(rate*overtime)
}
*/
//Take away point from uncle bob, best functions are those with no parameters
//way 2.OOP method
//Encapsulation
let employee={
    baseSalary:30000,
    overtime:10,
    rate:20,
    getWage(){
        return this.baseSalary+(this.overtime*this.rate)
    }
};
console.log(employee.getWage())
//Abstraction
//hiding implementation details of methods
//advantage is simple interface
//Reduce the impact of change


//Inheritance helps eliminate redudant code

//Polymorphism=> eliminate many if else, helps use render method
