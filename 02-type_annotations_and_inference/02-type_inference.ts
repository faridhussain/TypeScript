// ====================================== Type Inference ======================================

// type inference is the ability of TypeScript to automatically determine the type of a value
// this means we don't always have to write type annotations
// TypeScript looks at the assigned value and infers its type

// ====================================== Basic Type Inference ======================================

let city = 'Guwahati';
let age = 20;
let isStudent = true;

// inferred types:
// city -> string
// age -> number
// isStudent -> boolean

// TypeScript automatically infers these types based on the assigned values

// ====================================== Why Type Inference Is Useful ======================================

// type inference makes code shorter and easier to read
// it also reduces unnecessary type annotations

let language = 'TypeScript';

// instead of writing
let framework: string = 'React';

// TypeScript already knows that 'language' is a string

// ====================================== Type Safety With Inference ======================================

// even though we didn't write the type, TypeScript still protects it
let country = 'India';

// valid
country = 'Japan';

// error
// country = 100;

// TypeScript inferred 'country' as a string
// assigning a number is not allowed

// ====================================== Type Inference In Functions ======================================

// TypeScript can infer the return type of a function
function add(a: number, b: number) {
    return a + b;
}

// TypeScript infers the return type as number
// writing ': number' is optional here

// ====================================== Type Inference In Arrays ======================================

let numbers = [10, 20, 30];

// inferred type:
// number[]

numbers.push(40);

// error
// numbers.push('50');

// ====================================== Type Inference In Objects ======================================

let user = {
    name: 'Farid',
    age: 21,
};

// inferred type:
// {
//     name: string;
//     age: number;
// }

user.age = 22;

// error
// user.age = 'twenty two';

// ====================================== When Should You Rely On Type Inference ======================================

// use type inference when the type is obvious
// this keeps the code clean and avoids unnecessary annotations

let score = 95;
let isLoggedIn = false;
let message = 'hello';

// ====================================== When Should You Use Type Annotations Instead ======================================

// use explicit type annotations when:
// • the type is not obvious
// • writing function parameters
// • writing function return types when it improves readability
// • working with api responses
// • working with complex objects

// ====================================== Important Note ======================================

// type inference does not make TypeScript less type-safe
// TypeScript still checks the inferred type and reports errors when an incompatible value is assigned

export {};