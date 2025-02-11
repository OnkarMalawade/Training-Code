class Employee {
    name : string;
    id : number;
    private salary : number;
    constructor(name : string, id : number, salary : number){
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    getSalary() : number{
        return this.salary;
    }
    setSalary(salary : number) : void{
        this.salary = salary;
    }
    calculateBonus() : number{
        return this.salary;
    }
}

class Manager extends Employee{
    role: string;
    constructor(name : string, id : number, salary : number, role : string = "Manager"){
        super(name, id, salary);
        this.role = role;
    }
    calculateBonus() : number{
        return 1000 + this.getSalary();
    }
}

class Engineer extends Employee{
    role: string;
    constructor(name : string, id : number, salary : number, role : string = "Engineer"){
        super(name, id, salary);
        this.role = role;
    }
    calculateBonus() : number{
        return 500 + this.getSalary();
    }
}

class Intern extends Employee{
    role: string;
    constructor(name : string, id : number, salary : number, role : string = "Intern"){
        super(name, id, salary);
        this.role = role;
    }
    calculateBonus() : number{
        return 250 + this.getSalary();
    }
}

let emp1 = new Manager("onkar", 1, 5000, "Branch Manager");
let emp2 = new Engineer("bhushan", 2, 4000);
let emp3 = new Intern("uzaif", 3, 3000);

console.log(emp1);
console.log(emp1.calculateBonus());

console.log(emp2);
console.log(emp2.calculateBonus());

console.log(emp3);
console.log(emp3.calculateBonus());
export {};