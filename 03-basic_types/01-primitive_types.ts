// ====================================== Primitive Types ======================================

// primitive types are the most basic data types in TypeScript
// they represent a single value and are not objects

// TypeScript provides the following primitive types:
// string
// number
// boolean
// bigint
// symbol
// null
// undefined

// ====================================== String ======================================

// the string type is used to store text
let firstName: string = 'Farid';
let city: string = 'Guwahati';

// valid
firstName = 'Daryl';

// error
// firstName = 100;

// ====================================== Number ======================================

// the number type is used to store both integers and decimal values
let age: number = 21;
let price: number = 999.99;

// valid
age = 22;

// error
// age = 'twenty two';

// ====================================== Boolean ======================================

// the boolean type stores either true or false
let isLoggedIn: boolean = true;
let isAdmin: boolean = false;

// valid
isLoggedIn = false;

// error
// isLoggedIn = 'true';

// ====================================== BigInt ======================================

// bigint is used to store very large integers that are larger than the number type can safely represent
let population: bigint = 9007199254740993n;

// valid
population = 12345678901234567890n;

// error
// population = 100;

// bigint values must end with 'n'

// ====================================== Symbol ======================================

// symbol creates a unique value
const id1: symbol = Symbol('id');
const id2: symbol = Symbol('id');

console.log(id1 === id2);

// output:
// false

// every symbol is unique even if they have the same description

// ====================================== Null ======================================

// null represents the intentional absence of a value
let selectedUser: null = null;

// valid
selectedUser = null;

// ====================================== Undefined ======================================

// undefined represents a value that has not been assigned
let result: undefined = undefined;

// valid
result = undefined;

// ====================================== Important Note ======================================

// string, number and boolean are the most commonly used primitive types
// bigint and symbol are used less frequently in everyday applications
// null and undefined are covered in more detail later in the repository

export {};