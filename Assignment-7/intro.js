"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function f1(args) {
    return args;
}
console.log(f1(10)); // 10
console.log(f1("Hello World")); // Hello World
console.log(f1(true)); // true
var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.push = function (item) {
        this.stack.push(item);
    };
    Stack.prototype.pop = function () {
        return this.stack.pop();
    };
    return Stack;
}());
var stack1 = new Stack();
stack1.push(10);
stack1.push(20);
stack1.push(30);
console.log(stack1.pop()); // 30
console.log(stack1.pop()); // 20
console.log(stack1.pop()); // 10
console.log(stack1.pop()); // undefined
var stack2 = new Stack();
stack2.push("Hello");
stack2.push("World");
console.log(stack2.pop()); // World
console.log(stack2.pop()); // Hello
var apiResponse1 = {
    data: 10,
    status: 200
};
var apiResponse2 = {
    data: "Hello World",
    status: 200
};
var apiResponse3 = {
    data: { name: "Onkar", age: 20 },
    status: 200
};
console.log(apiResponse1);
// { data: 10, status: 200 }
console.log(apiResponse2);
// { data: 'Hello World', status: 200 }
console.log(apiResponse3);
// { data: { name: 'Onkar', age: 20 }, status: 200 }
function pair(first, second) {
    return [first, second];
}
var pair1 = pair(10, "Hello");
console.log(pair1);
// [ 10, 'Hello' ]
var pair2 = pair("Hello", 10);
console.log(pair2);
// [ 'Hello', 10 ]
var pair3 = pair("Hello", "World");
console.log(pair3);
function signUpUser(user) {
    return user;
}
var user1 = signUpUser({ name: "Onkar", age: 20 });
console.log(user1);
// { name: 'Onkar', age: 20 }
var user2 = signUpUser({ name: "Onkar", email: "onkar" });
console.log(user2);
function getUser(user) {
    return user;
}
var user3 = getUser({ name: "Onkar", age: 20, email: "onkar", password: "onkar" });
// user3.name = "Hello"; // Error
// user3.age = 30; // Error
console.log(user3);
function signUpUser1(user) {
    return user;
}
// const user4 = signUpUser1({ name : "Onkar", age : 20 }); // warning
// console.log(user4);
// { name: 'Onkar', age: 20 }
// make 2 properties required
var user5 = { name: "Onkar", age: 20, email: "onkar", password: "onkar" };
console.log(user5);
var user6 = {
    "1": { name: "Onkar", age: 20 },
    "2": { name: "Onkar", age: 20 }
};
console.log(user6);
var arr1 = ["Hello", "World"];
var arr2 = [1, 2, 3];
var arr3 = ["Hello", "World"];
var arr4 = [1, 2, 3];
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
var arr5 = ["Hello", 1];
console.log(arr5);
var arr6 = ["Hello", 1];
console.log(arr6);
var allUsers = [
    { name: "Onkar", age: 20 },
    { name: "Uzaif", age: 90 }
];
console.log(allUsers);
// [ { name: 'Onkar', age: 20 }, { name: 'Uzaif', age: 90 } ]
var allUsers1 = [
    { name: "Onkar", age: 20 },
    { name: "Uzaif", age: 90 }
];
console.log(allUsers1);
// [ { name: 'Onkar', age: 20 }, { name: 'Uzaif', age: 90 } ]
var arr9 = [33, 18, 65];
console.log(arr9);
var arr8 = ["onkar", "uzaif", "bhushanDDS"];
console.log(arr8);
var arr7 = ["oo", "uu", "bb"];
console.log(arr7);
var seatallocation;
seatallocation = "Diva S1";
seatallocation = "Madgoan A1";
seatallocation = "Thivim B1";
console.log(seatallocation);
// use of export {} is to avoid the error of "Cannot redeclare block-scoped variable 'user'." because of the same variable name in other files.
