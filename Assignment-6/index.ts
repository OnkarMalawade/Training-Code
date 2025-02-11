let str: string = "Hello World";
console.log(str);

let num: number = 10;
console.log(num);

let bool: boolean = true;
console.log(bool);

// Nested Interface
interface Address {
    city: string;
    state: string;
    pincode: number;
}

interface Person {
    name: string;
    age: number;
    address: Address;
}

let person3: Person = {
    name: "John",
    age: 25,
    address: {
        city: "New York",
        state: "New York",
        pincode: 10001
    }
}

// Enum
enum Color {
    Red,
    Green,
    Blue
}

let color: Color = Color.Red;

// Typescript vs Javascript
// Javascript is a dynamically typed language, while TypeScript is a statically typed language.
// Javascript is a language that runs in a browser, while TypeScript is a language that compiles to JavaScript.
// Javascript has a loose type system, while TypeScript has a strict type system.
// Javascript has no support for interfaces, while TypeScript has support for interfaces.

// Generics
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;

// Classes
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let person = new Person("John", 25);

// readonly modifier
class Person2 {
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
}

let person2 = new Person2("John");
person.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property.

// readonly vs const
// readonly is used to make a property read-only, while const is used to make a variable read-only.
