// ====================================== Type Annotations ======================================

// Type annotations allow us to explicitly tell TypeScript what type of value a variable, function parameter, or return value should have
// A type annotation is written after a colon (:)

// Syntax: 
// variableName: type

// ====================================== Variable Type Annotations ======================================

let firstName: string = 'Daryl';
let age: number = 20;
let isLoggedIn: boolean = true;
// here, TypeScript knows exactly what type of value each variable should store

// valid
age = 21;

// error
// age = 'twenty one';

// ====================================== Why Use Type Annotations? ======================================

// Type annotations help TypeScript detect mistakes while you're writing code
let price: number = 999;

// error
// price = '999';

// since 'price' is declared as a number, assigning a string is not allowed

// ====================================== Function Parameter Annotations ======================================

// parameters should usually have explicit types
function greet(name: string) {
    return `Hello ${name}`;
}
console.log(greet('Farid'));

// error
// greet(100)

// ====================================== Function Return Type Annotations ======================================

// we can also specify what a function should return
function multiply(a: number, b: number): number {
    return a * b;
}
// the ': number' after the parameter list means this function must return a number

// ====================================== When Should You Use Type Annotations? ======================================

// type annotations are recommended when:
// • the type is not obvious
// • writing function parameters
// • writing function return types
// • working with API responses
// • working with complex objects

// ====================================== Important Note ======================================

// type annotations only exist during development
// they help TypeScript understand your code, but they are removed when the code is compiled to JavaScript

export {};