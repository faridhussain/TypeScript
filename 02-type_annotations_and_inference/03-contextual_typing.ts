// ====================================== Contextual Typing ======================================

// contextual typing means TypeScript determines the type of a value based on where it is used
// instead of looking only at the assigned value, TypeScript also looks at the surrounding context

// ====================================== Function Parameters ======================================

// TypeScript knows that 'name' is a string because it comes from the array
const names = ['Daryl', 'Rick', 'Michonne'];

names.forEach((name) => {
    console.log(name.toUpperCase());
});

// we never wrote 'name: string'
// TypeScript inferred it from the array

// ====================================== Event Listeners ======================================

// TypeScript knows that 'event' is a MouseEvent

document.addEventListener('click', (event) => {
    console.log(event.clientX);
    console.log(event.clientY);
});

// we didn't write the type of 'event'
// TypeScript inferred it from addEventListener

// ====================================== Callback Functions ======================================

// TypeScript can infer parameter types inside callback functions

const numbers = [10, 20, 30];
numbers.map((number) => {
    return number * 2;
});

// 'number' is inferred as number

// ====================================== Function Expressions ======================================

// contextual typing also works when assigning a function to a variable

let greet: (name: string) => void;
greet = (name) => {
    console.log(`hello ${name}`);
};

// TypeScript knows that 'name' is a string
// it gets the type from the variable declaration

// ====================================== Why Contextual Typing Is Useful ======================================

// contextual typing reduces the need to write repetitive type annotations
// it keeps the code cleaner while maintaining type safety

// without contextual typing
const fruits = ['apple', 'banana'];
fruits.forEach((fruit: string) => {
    console.log(fruit);
});

// with contextual typing
fruits.forEach((fruit) => {
    console.log(fruit);
});

// both examples work
// the second one is shorter because TypeScript already knows the type

// ====================================== Important Note ======================================

// contextual typing only works when TypeScript has enough information
// if there is no context, you may need to write explicit type annotations

export {};