// ====================================== Object Types ======================================

// an object type describes the shape of an object
// it tells TypeScript what properties an object should have and what type each property should be

// ====================================== Basic Object Type ======================================

let user: {
    name: string
    age: number
} = {
    name: 'Farid',
    age: 21,
}

// valid
user.age = 22

// error
// user.age = 'twenty two';
// user.city = 'Guwahati';

// the object must match the defined shape

// ====================================== Object Type Annotation ======================================

// object types are written using curly braces
let product: {
    id: number
    title: string
    price: number
} = {
    id: 1,
    title: 'Laptop',
    price: 59999,
}

// ====================================== Optional Properties ======================================

// optional properties are marked using ?
let employee: {
    name: string
    department?: string
} = {
    name: 'Daryl',
}

// valid
employee.department = 'IT'

// ====================================== Readonly Properties ======================================

// readonly properties cannot be changed after the object is created
let account: {
    readonly id: number
    name: string
} = {
    id: 101,
    name: 'Rick',
}

// valid
account.name = 'Shane'

// error
// account.id = 102;

// ====================================== Nested Object Types ======================================

// object types can contain other objects
let student: {
    name: string
    address: {
        city: string
        pincode: number
    }
} = {
    name: 'Michonne',
    address: {
        city: 'Guwahati',
        pincode: 781001,
    },
}

console.log(student.address.city)

// ====================================== Object Type Inference ======================================

// TypeScript can infer the shape of an object
let car = {
    brand: 'Toyota',
    year: 2024,
}

// inferred type:
// {
//     brand: string;
//     year: number;
// }

// ====================================== Excess Properties ======================================

// TypeScript does not allow extra properties that are not part of the object type
let person: {
    name: string
    age: number
} = {
    name: 'Glenn',
    age: 30,

    // error
    // city: 'Atlanta',
}

// ====================================== When To Use Object Types ======================================

// object types are useful for small and simple objects
// when the same object structure is used in multiple places
// prefer interfaces or type aliases instead

// ====================================== Important Note ======================================

// object types describe the structure of an object
// they help TypeScript catch missing or invalid properties during development

export {}
