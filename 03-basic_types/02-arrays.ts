// ====================================== Arrays ======================================

// an array is used to store multiple values of the same type
// every element inside the array should have the same data type

// ====================================== Array Type ======================================

// there are two ways to define an array type

let numbers: number[] = [10, 20, 30];
let fruits: Array<string> = ['apple', 'banana', 'mango'];

// both syntaxes are correct
// the [] syntax is more commonly used

// ====================================== Adding Values ======================================

// valid
numbers.push(40);
fruits.push('orange');

// error
// numbers.push('50');
// fruits.push(100);

// TypeScript only allows values that match the array type

// ====================================== Accessing Array Elements ======================================

let firstNumber = numbers[0];
let firstFruit = fruits[0];

// TypeScript knows the type of the returned value
// firstNumber -> number
// firstFruit -> string

// ====================================== Mixed Arrays ======================================

// if an array needs to store multiple types, use a union type

let values: (string | number)[] = ['Farid', 21, 'TypeScript', 100];

// valid
values.push('React');
values.push(200);

// error
// values.push(true);

// ====================================== Empty Arrays ======================================

// when creating an empty array
// it's a good practice to provide a type annotation

let users: string[] = [];
users.push('Daryl');
users.push('Rick');

// error
// users.push(100);

// ====================================== Readonly Arrays ======================================

// a readonly array cannot be modified after it is created
const colors: readonly string[] = ['red', 'green', 'blue'];

// valid
console.log(colors[0]);

// error
// colors.push('yellow');
// colors.pop();
// colors[0] = 'black';

// readonly prevents accidental modifications

// ====================================== Important Note ======================================

// use [] syntax for most projects because it is shorter and easier to read
// use readonly arrays when the array should not be modified
// use union types only when an array needs to store multiple types

export {};