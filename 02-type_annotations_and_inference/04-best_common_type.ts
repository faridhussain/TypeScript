// ====================================== Best Common Type ======================================

// when a collection contains multiple values, TypeScript tries to find a single type that can represent all of them
// this process is called best common type

// ====================================== Best Common Type With Same Types ======================================

let numbers = [10, 20, 30];

// inferred type:
// number[]

// all elements are numbers, so TypeScript infers the array as number[]

// another example
let fruits = ['apple', 'banana', 'mango'];

// inferred type:
// string[]

// ====================================== Best Common Type With Different Types ======================================

let values = [10, 'hello'];

// inferred type:
// (string | number)[]

// since the array contains both numbers and strings
// TypeScript creates a union type that can hold both

// another example
let mixedValues = [true, 100, 'typescript'];

// inferred type:
// (boolean | number | string)[]

// ====================================== Best Common Type With Objects ======================================

let users = [
    { name: 'Farid', age: 21 },
    { name: 'Daryl', age: 28 },
];

// inferred type:
// {
//     name: string;
//     age: number;
// }[]

// both objects have the same structure
// so TypeScript infers a single object type

// ====================================== Different Object Shapes ======================================

let employees = [
    { name: 'Farid', age: 21 },
    { name: 'Rick' },
];

// inferred type:
// ({
//     name: string;
//     age?: number;
// })[]

// since one object doesn't have the 'age' property
// TypeScript makes it optional

// ====================================== Why Best Common Type Is Useful ======================================

// best common type helps TypeScript infer accurate types without requiring explicit annotations
// this makes code shorter while keeping it type-safe

// ====================================== Important Note ======================================

// if TypeScript cannot find a suitable common type
// you may need to provide an explicit type annotation

export {};