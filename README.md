# Generator Function

## Part 1 - Generator Function Introduction

- Generator Function Run Its Code When Required.
- Generator Function Return Special Object [Generator Object]
- Generators Are Iterable

```js
function* generateNumbers() {
  yield 1;
  console.log("Hello After Yield 1");
  yield 2;
  yield 3;
  yield 4;
}
```

--> in syntax the defernet between normal function and generator functions is the star `function*`.

```js
let generator = generateNumbers();

console.log(typeof generator); // object
console.log(generator); // > Object [Generator] {}
```

--> the yield is the data part that you can access to it using `.next()` method or `loops`.

```js
console.log(generator.next()); // output: { value: 1, done: false }
console.log(generator.next());
// output:
// Hello After Yield 1
// { value: 2, done: false }
```

--> from this logs above we can understand the next notes:

- `next()` go yield after yield inside generator object
- every code inside generator function working when we call first yield after it:
  - for example the console.log() working when we call yield number two
- the yield it's object have to element the value and done
  - value : the value of yield
  - done : when the next yield is found return true

```js
for (let value of generator) {
  console.log(value); // output:
  // 3
  // 4
}
```

--> so what we can understant from code above:

- the generator is like a stuff of box
- when we call a next() method it's like take a box from this stuff
- thats why the loop start from yield number 3 because we called the both of yields 1 and 2

```js
for (let value of generateNumbers()) {
  console.log(value);
}
console.log(generator.value); // output:
// 1
// Hello After Yield 1
// 2
// 3
// 4
```

--> so Questio, why it's log this time from beggenner ?. because this time we loop from another generator that we created it when we call generateNumbers again.

## Part 2 - Delegate Generator Function

Delegate Generator

```js
function* generateNums() {
  yield 1;
  yield 2;
}

function* generateLetters() {
  yield "A";
}

function* generateAll() {
  yield* generateNums();
  yield* generateLetters();
  yield* [4, 5, 6];
}

let generator = generateAll();

console.log(generator.next()); // 1
console.log(generator.next()); // 2
console.log(generator.next()); // A
console.log(generator.next()); // 4
console.log(generator.next()); // 5
console.log(generator.return("Z")); // 6
console.log(generator.next()); // undefind
```

-> if we don't use (\*) after yield will print generator object for functions `generateNumbers()` & `generateLetters()` and Array object for `array` value

## Part 3 - Generate Infinite Numbers

- Use Return Inside Generators

  - like when we use in last code above `generate.return("Z")`, if we use return inside generator function and we try to log for example the yields after return will return undefind

- Generate Infinite Numbers

```js
function* generateNumbers() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

let generator = generateNumbers();

console.log(generator.next()); // 1
console.log(generator.next()); // 2
console.log(generator.next()); // 3
console.log(generator.next()); // 4
```

--> it's generate next number from while loop without create infinite loop

Happy Codding!
