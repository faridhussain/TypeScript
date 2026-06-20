// ============================== Type System ==============================

// the type system is one of the main features of TS
// it helps TS understand what kind of values (variable, functions, and objects) are allowed to store
// this allows TS to catch many errors during development (before the code is executed)

// ---------------- Type Annotations ----------------

// type annotations allow us to explicitly specify a type
let firstName: string = 'Daryl'
let age: number = 20
let isLoggedIn: boolean = true
// TS now knows exactly what type of value each variable should contain

// valid
age = 21
// error
// age = 'twenty one'

// function annotations
function greet(name: string): string {
    return `hello ${name}`
}
// parameter type -> string
// return type -> string

// ---------------- Type Inference ----------------

// TS can often determine the type automatically
let city = 'Guwahati'
let marks = 95
let isStudent = true

// inferred types:
// city -> string
// marks -> number
// isStudent -> boolean
// no annotation is required because TS can figure out the type on its own

// valid
city = 'Delhi'
// error
// city = 100
// even though we did not write ":string". TS inferred it automatically

// ---------------- Type Annotations VS Type Inference ----------------

// Annotation
let username: string = 'Shane'

// Inference
let country = 'US'

// use inference when the type if obvious
// use annotations when clarity is needed, or even working with function parameters 
// objects, complex types, and api data

// ---------------- Type Assertions ----------------

// type assertions tell TS: "trust me, I know the type of this value"
// they do not change the actual value
let value: unknown = 'typescript'
let language = value as string
console.log(language.toUpperCase())

// another example
const input = document.querySelector('input') as HTMLInputElement
// TS now nows that input is an HTMLInputElement

// angle bracket syntax
let data: unknown = 'hello'
let text = data
// this works in TS
// however, the 'as' syntax is generally preferred because angle brackets can conflict with jsx in react

// ---------------- Important Note ----------------

// type assertions do not perform runtime checks
let randomValue: unknown = 100
// TS trusts us
let result = randomValue as string
// this compiles successfully, but can cause problems at runtime because the actual value is still a number

export {}