"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello World");
var str = "Hello World";
str.toLowerCase();
console.log(str);
var num = 10;
console.log(num);
var bool = true;
console.log(bool);
var arr = [1, 2, 3, 4, 5];
console.log(arr);
var person = { name: "Onkar", age: 20 };
console.log(person);
console.log(person.name);
console.log(person.age);
var checkEvenOdd = function (n1) {
    if (n1 % 2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
};
console.log(checkEvenOdd(10));
var checkPrime = function (n1) {
    var flag = true;
    for (var i = 2; i < n1; i++) {
        if (n1 % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        return "Prime";
    }
    else {
        return "Not Prime";
    }
};
console.log(checkPrime(11));
var userData = 232.232;
console.log(userData);
// userData = "Hello World";
// console.log(userData);
function addTwo(num) {
    return Number(num) + 2;
}
console.log(addTwo("10"));
function getUpper(strr) {
    return strr.toUpperCase();
}
console.log(getUpper("hello"));
// function signUpser(name : string, age : number, email : string, password : string) : object{
//     return {name, age, email, password};
// }
// console.log(signUpser("Onkar", 20, "onkar", "onkar"));
var signUpser = function (name, age, email, password) {
    return { name: name, age: age, email: email, password: password };
};
console.log(signUpser("Onkar", 20, "onkar", "onkar"));
function getData(data) {
    if (data === 200) {
        return "Success";
    }
    else {
        return false;
    }
}
console.log(getData(100));
console.log(getData(200));
var heros = ["Spiderman", "Ironman", "Hulk", "Thor", "Captain America"];
heros.forEach(function (hero) {
    console.log(hero);
});
heros.push("Black Panther");
console.log(heros);
var Mheros = heros.map(function (hero) {
    return hero + " - Marvel";
});
console.log(Mheros);
