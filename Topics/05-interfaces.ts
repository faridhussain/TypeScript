// ============================ Interfaces ============================

// an interfaces defines the structure of an object
// interfaces are used to describe what properties and types an object should have
// TS checks whether an object follows the structure defined by the interface

// --------------------- Basic Interface ---------------------

interface User {
    name: string
    age: number
}
const user1: User = {
    name: 'Ezekiel',
    age: 20,
}

// error
// const user2: User = {
//     name: 'Merle'
// }
// property 'age' is missing

// --------------------------- Optional Properties ---------------------------

// optional properties are marked using ?
interface Employee {
    name: string
    department?: string
}
const employee1: Employee = {
    name: 'Siddiq',
    department: 'engineering',
}
// optional properties may or may not exist

// --------------------------- Readonly Properties ---------------------------

interface Product {
    readonly id: number
    name: string
}
const product: Product = {
    id: 1,
    name: 'keyboard',
}

// error
// product.id = 2
// readonly properties cannot be modified after object creation

// --------------------------- Extending Interfaces ---------------------------

// interfaces can inherit properties from another interface using extends
interface Person {
    name: string
}
interface Student extends Person {
    course: string
}

const student: Student = {
    name: 'farid',
    course: 'computer science',
}
// Student now contains: name, course

// --------------------------- Interface for Functions ---------------------------

// interfaces can also describe function signatures
interface Greet {
    (name: string): string
}
const greet: Greet = (name) => {
    return `hello ${name}`
}

// --------------------------- Interfaces for Methods ---------------------------

interface Calculator {
    add(a: number, b: number): number
}
const calculator: Calculator = {
    add(a, b) {
        return a + b
    },
}

export {}

// --------------------------- Declaration Merging ---------------------------

// if multiple interfaces have the same name, TypeScript automatically merges them

interface Animal {
    name: string
}

interface Animal {
    age: number
}

const animal: Animal = {
    name: 'dog',
    age: 3,
}

// TS combines both interfaces into one
// the merged interface becomes:
// interface Animal {
//     name: string
//     age: number
// }
// this feature is called declaration merging