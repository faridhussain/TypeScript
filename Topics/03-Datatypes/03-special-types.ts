// ============================= Special Types =============================

// TS provides some special types that help us handle situations where normal primitive or reference types are not enough

// ---------------- any ----------------

// any disables type checking
// TS allows any value to be assigned
let data: any = 'Morgan'
data = 20
data = true
data = { age: 33 }
// avoid using any whenever possible because it removes most of the benefits of TS

// ---------------- unknown ----------------

// unknown can store any value just like any 
// however, TS forces us to check the type before using the value
let userInput: unknown = 'hello'
if (typeof userInput === 'string') {
    console.log(userInput.toUpperCase())
}
// unknown is safer than any

// ---------------- any vs unknown ----------------

let value1: any = 'typescript'
value1.toUpperCase()    // allowed

let value2: unknown = 'typescript'
// value2.toUpperCase()
// error because TS does not know the actual type of value2

// ---------------- void ----------------

// void means a function does not return anything
function greet(): void {
    console.log('hello')
}
greet()

// ---------------- never ----------------

// never represents a value that never occurs
// usually used in functions that never finish or always throw an error
function throwError(message: string): never {
    throw new Error(message)
}
// the function never returns a value

// ---------------- tuple ----------------

// a tuple is a special array type
// it allows us to define the exact type and position of each element
let user: [string, number] = ['Carl', 20]
// index 0 -> string
// index 1 -> number

// ---------------- enum ----------------

// enums allow us to define a set of named constants
enum Role {
    Admin, 
    User,
    Guest
}

let currentRole: Role = Role.Admin
// by default:
// Admin = 0
// User = 1
// Guest = 2

// string enum
enum Status {
    Success = 'SUCCESS',
    Error = 'ERROR',
    Loading = 'LOADING'
}
let apiStatus: Status = Status.Success

export {}