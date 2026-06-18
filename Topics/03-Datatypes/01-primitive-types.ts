// ========================== Primitive Types ==========================

// primitive types are the most basic data types in JS and TS
// a primitive value stores the actual value directly in memory

// JS has 7 primitive data types:
// string, number, boolean, undefined, null, bigint, symbol
// TS allows us to explicitly specify the type of a variable

// string
// used to store textual data
let firstName: string = 'Negan'

// number
// used to store both integer and floating point numbers
let age: number = 20
let price: number = 99.99

// boolean
// used to store true or false values
let isLoggedIn: boolean = true
let isAdmin: boolean = false

// null
// represents an intentional absence of a value
let userData: null = null

// undefined 
// represents a variable that has not been assigned a value
let address: undefined = undefined

// symbol
// used to create unique values
const id1: symbol = Symbol('id')
const id2: symbol = Symbol('id')
// even though both symbols have the same description, they are completely unique
console.log(id1 === id2)    // false

// bigint
// used to store very large integers
const largeNumber: bigint = 123456789012345678901234567890n

export {}