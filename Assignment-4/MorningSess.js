// Call Back Function
// Description: A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
//Code:
function myFunction(callback) {
    console.log("Hello Earth");
    callback();
}
function myCallback() {
    console.log("Hello World");
}
myFunction(myCallback);

// Promise using call Back
// Description: A promise is an object representing the eventual completion or failure of an asynchronous operation. Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
// Code:
function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello Bank");
        }, 2000);
    });
}
myPromise().then((data) => {
    console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

// async await in call Back
// Description: The async function declaration defines an asynchronous function, which returns an AsyncFunction object. The await expression causes async function execution to pause until a Promise is settled, that is fulfilled or rejected, and to resume execution of the async function after fulfillment.
// Code:
function myPromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello Bank");
        }, 2000);
    });
}
async function myAsyncFunction() {
    try {
        console.log("Hello Manager");
        const data = await myPromise2();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
myAsyncFunction();

// map vs Filter
// Description: map() method creates a new array with the results of calling a provided function on every element in the calling array. filter() method creates a new array with all elements that pass the test implemented by the provided function.
// Code:
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

const squaredNumbers = numbers.map((number) => number * number);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

const evenNumberMap = numbers.map((number) => number % 2 === 0);
console.log(evenNumberMap); // Output: [false, true, false, true, false]

// reduce
// Description: The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
// Code:
const num = [1, 2, 3, 4, 5];
const sum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const sum1 = num.reduce((accumulator, currentValue) => accumulator + currentValue, 2);
console.log(sum); // Output: 15
console.log(sum1); // Output: 17

// ternary operator
// Description: The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute
// Code:
const age = 24;

const isAdult = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(isAdult); // Output: You are an adult

const isTeen = age < 18 ? "You are a teen" : "You are not a teen";
console.log(isTeen); // Output: You are not a teen

const one = 12 ?? 0;
console.log(one); // Output: 12

const two = 0 ?? 24;
console.log(two); // Output: 0

const five = null ?? 24;
console.log(five); // Output: 24

// property shorthand
// Description: Property shorthand is a feature in JavaScript that allows you to create object properties from variables. It is a way to simplify the object initialization process.
// Code:
const name = "Onkar";
const age = 24;
const person = { name, age };
console.log(person); // Output: { name: 'Onkar', age: 24 }

// spread operator
// Description: The spread operator is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expands it into individual elements.
// Code:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]

// destructuring Object
// Description: Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
// Code:
const person1 = { name: "Onkar", age: 24 };
const { name, age } = person1;
console.log(name); // Output: Onkar
console.log(age); // Output: 24

// stack memory and heap memory
// Description: Stack memory is used to store local variables and function call, while heap memory is used to store objects in JavaScript.
// Code:
let a = 10;
let b = a;
a = 20;
console.log(a); // Output: 20
console.log(b); // Output: 10

