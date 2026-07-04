// ====================================== Tuples ======================================

// a tuple is a special type of array where each element has a fixed position and type
// unlike normal arrays, tuples can store different types in a specific order

// ====================================== Basic Tuple ======================================

let user: [string, number] = ['Farid', 21];

// valid
user = ['Daryl', 32];

// error
// user = [21, 'Farid'];
// user = ['Farid'];
// user = ['Farid', 21, true];

// the order and number of elements must match the tuple type

// ====================================== Accessing Tuple Elements ======================================

let name = user[0];
let age = user[1];

// inferred types:
// name -> string
// age -> number

// TypeScript knows the exact type of each element

// ====================================== Tuple With More Elements ======================================

let employee: [number, string, boolean] = [101, 'Rick', true];

// inferred types:
// employee[0] -> number
// employee[1] -> string
// employee[2] -> boolean

// ====================================== Optional Tuple Elements ======================================

// optional elements are written using ?
let student: [string, number?] = ['Michonne'];

// valid
student = ['Michonne'];
student = ['Michonne', 95];

// error
// student = [95];

// ====================================== Readonly Tuples ======================================

// readonly tuples cannot be modified after creation
const point: readonly [number, number] = [10, 20];

// valid
console.log(point[0]);

// error
// point[0] = 30;

// ====================================== Named Tuples ======================================

// named tuples improve readability by giving names to each element
let product: [id: number, name: string] = [1, 'Laptop'];

// the names are only for readability
// they do not affect how the tuple works

// ====================================== When To Use Tuples ======================================

// tuples are useful when:
// • the order of values is important
// • the number of values is fixed
// • each position has a specific type

// examples:
// • coordinates
// • rgb colors
// • key-value pairs
// • api responses with a fixed structure

// ====================================== Important Note ======================================

// use arrays when every element has the same type
// use tuples when each position has a different meaning and type

export {};