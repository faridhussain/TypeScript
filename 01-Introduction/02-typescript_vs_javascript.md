# TypeScript vs JavaScript

## Overview

JavaScript and TypeScript are closely related, but they are not the same.

JavaScript is a programming language that runs directly in browsers and JavaScript runtimes like Node.js.

TypeScript is a superset of JavaScript. It builds on top of JavaScript by adding a static type system and other features that help developers write safer and more maintainable code.

Since TypeScript is a superset of JavaScript, every valid JavaScript program is also valid TypeScript code.

---

## JavaScript vs TypeScript

| JavaScript | TypeScript |
|------------|------------|
| Dynamically typed | Statically typed |
| Errors are usually found while running the code | Many errors are caught during development |
| No built-in type system | Has a powerful static type system |
| Runs directly in browsers and Node.js | Must be compiled to JavaScript before it can run |
| Better for small scripts and quick prototypes | Better for medium and large applications |
| Limited editor support | Excellent autocompletion, navigation, and refactoring |

---

## Example

### JavaScript

```javascript
let age = 20;
age = 'twenty';
console.log(age);
```
JavaScript allows changing the value from a number to a string because variables are dynamically typed.

---
### TypeScript
```typescript
let age: number = 20;
age = 'twenty';
```
TypeScript reports an error because `age` is declared as a `number`.

This helps catch mistakes before the application runs.

---

## Advantages of TypeScript

- Detects many errors during development.
- Makes code easier to understand.
- Improves autocompletion and editor support.
- Makes refactoring safer.
- Easier to maintain large codebases.
- Widely used in professional projects.

---

## Advantages of JavaScript

- Simpler to learn.
- No compilation step required.
- Runs directly in browsers and Node.js.
- Good for small projects and quick prototypes.

---

## Summary

- TypeScript is built on top of JavaScript.
- JavaScript focuses on flexibility, while TypeScript focuses on safety and maintainability.
- TypeScript catches many mistakes during development.
- TypeScript code is compiled into JavaScript before it runs.