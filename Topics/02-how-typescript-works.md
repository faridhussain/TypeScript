# Behind the Scene
Let's say we have a file called `main.ts`

## Step 1 -> Lexer (Tokenizer)
Every programming language has a lexer (also called a tokenizer), it's job is to break the code into small pieces called **tokens**.

Tokens are things like:
```ts
let
const
false
=
if
function
```

Example:
```ts
let age: number = 20
```

Lexer converts it into tokens:
```text
let
age
:
number
=
20
```

The Lexer does not check if the code is correct, it only splits the code into tokens.

---

## Step 2 -> Parser
The parser takes all the tokens and creates a tree-like structure called **AST (abstract syntax tree)**

Example:
```ts
let age: number = 20
```
becomes something like:
```text
variable declaration
|- name: age
|- type: number
|- value: 20
```
this tree helps `TypeScript` understand the structure of the code.

---

## Step 3 -> Binder
The Binder connects everything together and creates information that will be used later by the checker.

Some important things it does:

### 1. Symbol Tables
Stores information about variables, functions, classes, interfaces, etc.

Example:
```ts
let age = 20
```
TypeScript stores:
```text
age -> variable
```
so later it knows where `age` was declared.

### 2. Parent Pointers
Every node inside the AST gets a reference to its parent node, this makes it easier for typescript to move around the AST when analyzing code.

### 3. Flow Nodes
Used for control flow analysis

Example:
```ts
function greet(name: string | undefined) {
    if (name) {
        return name.toUpperCase()
    }
}
```
inside the `if` block, typescript knows that `name` cannot be `undefined`.
> Flow Nodes help TypeScript track these conditions.

--- 

## Step 4 -> Checker
This is the most important phase of TypeScript, the checker performs: 
- type checking
- type inference
- error checking
- control flow analysis

example: 
```ts
let age: number = 'hello'
```
TypeScript gives an error because a string cannot be assigned to a number.

### Short circuiting
The checker sometimes stops checking further when it already knows the result.

Example:
```ts
if (true || someFunction()) { }
```
TypeScript knows the condition is already true

So it understands that ***someFunction()*** is not needed to determine the result.

This is called `Short Circuiting`.

---

## Step 5 -> Emitter

After everything is checked, the emitter generates output files.

TypeScript types are removed because browsers only understand JS.

Example:

**TypeScript:**
```ts
let age: number = 20
```

**generated javascript:**
```js
let age = 20
```
The emitter can generate:
- `.js` -> javascript code
- `.d.ts` -> type declaration files
- `.map` -> source maps used for debugging
---
## Complete Flow

```text
main.ts
   ↓
lexer (tokenizer)
   ↓
parser
   ↓
ast (abstract syntax tree)
   ↓
binder
   ↓
checker
   ↓
emitter
   ↓
.js / .d.ts / .map
```
---
## Summary
- Lexer breaks code into tokens.
- Parser creates an AST.
- Binder connects declarations and builds symbol information.
- Checker performs type checking and finds errors.
- Emitter removes typescript-specific code and generates output files.