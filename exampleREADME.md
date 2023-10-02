# OOP JavaScript

Object-Oriented Programming (OOP) is a programming paradigm that organizes code into `objects` which are instances of `classes`. It promotes concepts like `encapsulation, inheritance, polymorphism, and abstraction` to enhance code organization, reusability, and flexibility. OOP enables modeling real-world entities and their interactions through a structured approach, improving code maintainability and scalability. Common OOP languages include Java, Python, C++, and more.




## Table of Content
- [Part 1 - Create , Update Properties/Methodes And Built In Constructors](#part-1---create--update-propertiesmethodes-and-built-in-constructors) 
  - [simple class obj](#simple-class-obj) 
  - [create classe](#create-classe) 
- [Part 2 - Class Static Properties And Methods](#part-2---class-static-properties-and-methods) 
- [Part 3 - Inheritance](#part-3---inheritance) 
- [Part 4 - Encapsulation](#part-4---encapsulation) 
- [Part 5 - Prototype](#part-5---prototype) 
- [Part 6 - Object Meta Data And Descriptor](#part-6---object-meta-data-and-descriptor) 
  - [Part A](#part-a) 
  - [Part B](#part-b) 
 
## Part 1 - Create , Update Properties/Methodes And Built In Constructors

### simple class obj

```js
class User {
  constructor(id, username, salary) {
    this.id = id;
    this.username = username;
    this.salary = salary;
  }
  updateName(newName) {
    this.username = newName;
  }
}

let userOne = new User(100, "Elzero", 5000);
```

### create classe

-> ES6 class syntax:

```js
class Class_name {}
```

-> for create properties of class we use constructor

```js
class Class_name {
  constructor(param1, param2) {
    this.prop1 = param1;
    this.prop2 = param2;
  }
}
```

-> for create a class method we go down after constructor and put it like this

-> methods: it's functions inside class, we use it to edit in our obj like (delet,change,add,calcul ...)

```js
class Class_name {
  constructor(param1, param2) {
    this.prop1 = param1;
    this.prop2 = param2;
  }
}
method(){
  return "hello world"
}
```

## Part 2 - Class Static Properties And Methods

- Static Properties: A static property is a property that is created for the class itself and is not accessible from instances of the class. For example:

```js
class User {
  static count = 0;

  constructor() {}

  method1() {}
  method2() {}
}
```

In this example, count is a static property for the User class. If we create an instance of User, we cannot access it from that instance:

```js
const user = new User();
console.log(user.count); // Output: undefined
```

Static Method: A static method serves a similar purpose to static properties. You can create a static method by adding the static keyword before the method name, like this:

```js
static method1() {
    // Implementation
}
```

## Part 3 - Inheritance

-> in the example below we created a class that we called it User:

- user it's a obj that have 2 props (id,username) and one method (sayHello)

```js
// Parent Class
class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}
```

-> for DRY and make editing in your editing simple and easy we use Inheritance.

-> we created a obj that we called it Admin :

- Admin is User that have another properties that we called it `permissions` and have same other props and methos
- for use props from parent class (User), we need to add super()
- `super()` called same method that we use super() into in parent Class and get info from it
  - in this example it's called constructor function and get props form it

```js
// Derived Class
class Admin extends User {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}
```

-> test:

```js
let userOne = new User(100, "Elzero");
let adminOne = new Admin(110, "Mahmoud", 1);

console.log(userOne.u); // Elzero
console.log(userOne.sayHello()); //Hello Elzero
console.log("####");
console.log(adminOne.i); // 110
console.log(adminOne.u); // Mahmoud
console.log(adminOne.p); // 1
console.log(adminOne.sayHello()); // Hello Mahmoud
```

## Part 4 - Encapsulation

- Class Fields Are Public By Default

- Guards The Data Against Illegal Access.

- Helps To Achieve The Target Without Revealing Its Complex Details.

- Will Reduce Human Errors.

- Make The App More Flexible And Manageable.

- Simplifies The App.

-> ther is some notes in Part 4/script.js file

```js
class ClassName {
  #prop; // first we need to add our private props here with # in first of every prop
  constractor(param1) {
    this.#prop = param1; // we add # to prop for make it private
  }
}
```

## Part 5 - Prototype

- Introduction

  - Prototypes are the mechanism by which JavaScript objects inherit features from one another.

    -> Don't make things harder for yourself; it's simple and easy. The prototype is just a style of an object generated automatically with any class. It acts as a template for objects created from this class, containing properties and methods that these objects can utilize.

    Note you can see it by print it into console:

```js
console.log(String.prototype);
```

it's will look like this `String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}`
click on it in the console to show more details

Advice: for understand what is prototype exactly and how it's look like create you own class and console.log(YourClassName.prototype)

- Add To Prototype Chain & Extend Built In Constructors Features

  -> we can also add to old classes that we created or not a new properties and functions by for example:

```js
Object.prototype.sayHello = "Hello world";
String.prototype.myNewFunction = () => {
  return "this functions apply something in your stirng!";
};
```

we can now access to sayHello prop from any obj String or Number ... because this objs inheritance from Object objet.

but we can't access to myNewFunction from Number object because it's deosn't inheritance from String.

if we want to accesss to myNewFUnction we need to use a String obje:

```js
console.log("my srring".myNewFunction()); // output: "this functions apply something in your stirng!"
```

## Part 6 - Object Meta Data And Descriptor

### Part A

- writable

- enumerable

- configurable

```js
const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: 3,
});
```

writable: premesion write on it

enumerable: premesion to use this prop into a loop

configurable: premesion to delete or redefine it

Note: take a look to Part 6/Part A/script.js for more details

### Part B

- Define Multiple Properties

```js
const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperties(myObject, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});
```

- Check Descriptors

  -> for one prop

  ```js
  console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
  ```

  -> multi props

  ```js
  console.log(Object.getOwnPropertyDescriptors(myObject));
  ```

Happy Coding!
