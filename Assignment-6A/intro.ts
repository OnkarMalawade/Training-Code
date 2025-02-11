// console.log("Hello World");

// let str: string = "Hello World";
// str.toLowerCase();
// console.log(str);

// let num: number = 10;
// console.log(num);

// let bool: boolean = true;
// console.log(bool);

// let arr: number[] = [1, 2, 3, 4, 5];
// console.log(arr as number[]);

// let person: object = { name: "Onkar", age: 20 };
// console.log(person);
// console.log((person as any).name);
// console.log((person as any).age);

// const checkEvenOdd = (n1 : number) : string =>{
//     if(n1%2 == 0){
//         return "Even";
//     }
//     else{
//         return "Odd";
//     }
// }

// console.log(checkEvenOdd(10));

// const checkPrime = (n1 : number) : string =>{
//     let flag : boolean = true;
//     for(let i = 2; i < n1; i++){
//         if(n1%i == 0){
//             flag = false;
//             break;
//         }
//     }
//     if(flag){
//         return "Prime";
//     }
//     else{
//         return "Not Prime";
//     }
// }

// console.log(checkPrime(11));

// let userData = 232.232
// console.log(userData);
// // userData = "Hello World";
// // console.log(userData);

// function addTwo(num : string) : number{
//     return Number(num) + 2;
// }

// console.log(addTwo("10"));

// function getUpper(strr : string) : string{
//     return strr.toUpperCase();
// }

// console.log(getUpper("hello"));

// // function signUpser(name : string, age : number, email : string, password : string) : object{
// //     return {name, age, email, password};
// // }

// // console.log(signUpser("Onkar", 20, "onkar", "onkar"));

// let signUpser = (name : string, age : number, email : string, password : string) => {
//     return {name, age, email, password};
// }

// console.log(signUpser("Onkar", 20, "onkar", "onkar"));

// function getData(data : number) : string | boolean{
//     if(data === 200){
//         return "Success";
//     }
//     else{
//         return false;
//     }
// }

// console.log(getData(100));
// console.log(getData(200));

// const heros = ["Spiderman", "Ironman", "Hulk", "Thor", "Captain America"];

// heros.forEach((hero) => {
//     console.log(hero);
// });

// heros.push("Black Panther");
// console.log(heros);

// const Mheros = heros.map((hero): string => {
//     return hero + " - Marvel";
// });

// console.log(Mheros);

// function createPeople({name2: string, age: number}):void{
//     this.name2 = name2;
//     this.age = age;
// }
// let newPeople = {name2: "Onkar", age: 20, email: "onkar@dd.com"};
// createPeople(newPeople);

interface People{
    name: string;
    age: number;
}

interface Manager extends People{
    role: string;
}

let emp1: Manager = {
    name: "Onkar",
    age: 20,
    role: "Branch Manager"
}

console.log(emp1);

interface Employee{
    people: People;
    role : string;
}

let emp2: Employee = {
    people: {
        name: "AAA",
        age: 20
    },
    role: "Branch IT"
}

console.log(emp2);


export {}
