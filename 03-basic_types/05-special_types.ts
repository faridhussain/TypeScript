// ====================================== Special Types ======================================

// TypeScript provides a few special types that behave differently from regular types
// these types are useful in specific situations and help us write safer code

// special types:
// • any
// • unknown
// • never
// • void

// ====================================== Any ======================================

// the any type disables type checking
// a variable of type any can store any kind of value

let value: any = 'hello';
value = 100;
value = true;
value = [];
value = {};

// TypeScript does not report any errors
// any should be avoided whenever possible because it removes type safety

// ====================================== Unknown ======================================

// unknown is a safer alternative to any
// it can store any value, but we must check its type before using it

let userInput: unknown = 'typescript';

// error
// console.log(userInput.toUpperCase());

// valid
if (typeof userInput === 'string') {
    console.log(userInput.toUpperCase());
}

// TypeScript requires us to narrow the type before using it

// ====================================== Any VS Unknown ======================================

let anyValue: any = 'hello';
let unknownValue: unknown = 'hello';

// valid
anyValue.toUpperCase();

// error
// unknownValue.toUpperCase();

// unknown forces us to perform a type check first

// ====================================== Void ======================================

// void represents the absence of a return value
// it is commonly used as the return type of functions
function printMessage(message: string): void {
    console.log(message);
}

// this function does not return anything

// ====================================== Never ======================================

// never represents values that never occur
// it is used when a function never completes normally
function throwError(message: string): never {
    throw new Error(message);
}

// another example
function infiniteLoop(): never {
    while (true) {}
}

// never is different from void
// void means the function finishes without returning a value
// never means the function never finishes

// ====================================== When To Use Special Types ======================================

// use any only when absolutely necessary
// use unknown when the value type is not known yet
// use void for functions that do not return anything
// use never for functions that never complete normally

// ====================================== Important Note ======================================

// prefer unknown over any whenever possible
// unknown keeps TypeScript's type safety while any completely disables it

export {};