// ====================================== Enums ======================================

// an enum is a special TypeScript feature that allows us to define a set of named constant values
// enums make code easier to read and prevent the use of random numbers or strings

// ====================================== Numeric Enums ======================================

// by default, numeric enums start from 0
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

console.log(Direction.Up); // 0
console.log(Direction.Down); // 1

// ====================================== Custom Numeric Values ======================================

// we can also specify the starting value
enum Status {
    Pending = 1,
    Processing,
    Completed,
    Cancelled,
}

console.log(Status.Pending); // 1
console.log(Status.Processing); // 2
console.log(Status.Completed); // 3
// the remaining members are automatically incremented

// ====================================== String Enums ======================================

// every member must be assigned a string value
enum UserRole {
    Admin = 'ADMIN',
    User = 'USER',
    Guest = 'GUEST',
}

console.log(UserRole.Admin);
// string enums are commonly used when working with apis and databases

// ====================================== Heterogeneous Enums ======================================

// heterogeneous enums contain both numbers and strings
enum Result {
    Success = 1,
    Failed = 'FAILED',
}
// this is valid but rarely used
// in most cases, prefer using only numeric or only string enums

// ====================================== Reverse Mapping ======================================

// numeric enums support reverse mapping
enum Color {
    Red,
    Green,
    Blue,
}

console.log(Color.Red); // 0
console.log(Color[0]); // Red
// reverse mapping only works for numeric enums

// ====================================== Const Enums ======================================

// const enums are removed during compilation
// their values are directly inlined into the generated JavaScript

const enum Size {
    Small,
    Medium,
    Large,
}

let selectedSize = Size.Medium;
// const enums can improve performance because no enum object is created
// however, they are not suitable in every project

// ====================================== When To Use Enums ======================================

// enums are useful when:
// • there is a fixed set of related values
// • the values should not change
// • readable names are better than magic numbers or strings

// examples:
// • user roles
// • order status
// • directions
// • days of the week

// ====================================== Important Note ======================================

// string enums are more common in modern applications because they produce more meaningful values
// const enums are a compile-time optimization and should be used only when appropriate

export {};