function f1<T> (args : T) : T {
    return args;
}

console.log(f1(10)); // 10
console.log(f1("Hello World")); // Hello World
console.log(f1(true)); // true

class Stack<T> {
    private stack : T[] = [];
    push(item : T) : void {
        this.stack.push(item);
    }
    pop() : T | undefined {
        return this.stack.pop();
    }
}

const stack1 = new Stack<number>();
stack1.push(10);
stack1.push(20);
stack1.push(30);
console.log(stack1.pop()); // 30
console.log(stack1.pop()); // 20
console.log(stack1.pop()); // 10
console.log(stack1.pop()); // undefined

const stack2 = new Stack<string>();
stack2.push("Hello");
stack2.push("World");
console.log(stack2.pop()); // World
console.log(stack2.pop()); // Hello

interface APIResponse<T> {
    data : T;
    status : number;
}

const apiResponse1 : APIResponse<number> = {
    data : 10,
    status : 200
}

const apiResponse2 : APIResponse<string> = {
    data : "Hello World",
    status : 200
}

const apiResponse3 : APIResponse<{ name : string, age : number }> = {
    data : { name : "Onkar", age : 20 },
    status : 200
}

console.log(apiResponse1);
// { data: 10, status: 200 }
console.log(apiResponse2);
// { data: 'Hello World', status: 200 }
console.log(apiResponse3);
// { data: { name: 'Onkar', age: 20 }, status: 200 }

function pair<T, U> (first : T, second : U) : [T, U] {
    return [first, second];
}

const pair1 = pair<number, string>(10, "Hello");
console.log(pair1);
// [ 10, 'Hello' ]

const pair2 = pair<string, number>("Hello", 10);
console.log(pair2);
// [ 'Hello', 10 ]

const pair3 = pair<string, string>("Hello", "World");
console.log(pair3);
// [ 'Hello', 'World' ]

// Partial Generic
// Partial Generic is used to make all the properties of an interface optional.
interface User {
    name : string;
    age : number;
    email : string;
    password : string;
}

function signUpUser(user : Partial<User>) : User {
    return user as User;
}

const user1 = signUpUser({ name : "Onkar", age : 20 });
console.log(user1);
// { name: 'Onkar', age: 20 }

const user2 = signUpUser({ name : "Onkar", email : "onkar" });
console.log(user2);
// { name: 'Onkar', email: 'onkar' }

// Readonly Generic
// Readonly Generic is used to make all the properties of an interface readonly.
interface User1 {
    name : string;
    age : number;
    email : string;
    password : string;
}

function getUser(user : Readonly<User1>) : User1 {
    return user;
}

const user3 = getUser({ name : "Onkar", age : 20, email : "onkar", password : "onkar" });

// user3.name = "Hello"; // Error
// user3.age = 30; // Error

console.log(user3);
// { name: 'Onkar', age: 20, email: 'onkar', password: 'onkar' }

// Required Generic
// Required Generic is used to make all the properties of an interface required.

interface User2 {
    name : string;
    age : number;
    email ?: string;
    password ?: string;
}

function signUpUser1(user : Required<User2>) : User2 {
    return user;
}

// const user4 = signUpUser1({ name : "Onkar", age : 20 }); // warning
// console.log(user4);
// { name: 'Onkar', age: 20 }

// make 2 properties required
let user5 : Required<User2> = { name : "Onkar", age : 20, email : "onkar", password : "onkar" };
console.log(user5);
// { name: 'Onkar', age: 20, email: 'onkar', password: 'onkar' }

// Record Generic
// Record Generic is used to create an object type whose properties are of a specific type.
interface User3 {
    name : string;
    age : number;
}

const user6 : Record<string, User3> = {
    "1" : { name : "Onkar", age : 20 },
    "2" : { name : "Onkar", age : 20 }
};

console.log(user6);

export {};
// use of export {} is to avoid the error of "Cannot redeclare block-scoped variable 'user'." because of the same variable name in other files.