class Employee {
    constructor(name, id, salary) {
       this.name = name;
        this.id = id;
        this.#salary = salary;
    }

    #salary;
    getSalary() {
        return this.#salary;
    }
    setSalary(salary) {
        this.#salary = salary;
    }
    calculateBonus() {
        return this.#salary * 0;     
    }
}

const emp1 = new Employee("onkar", 34, 5000);
console.log("Eployee 1:", emp1);
console.log("Eployee 1 sal bonus:", emp1.calculateBonus());

class Manager extends Employee {
    constructor(name, id, salary, role) {
        super(name, id, salary);
        this.role = role;
    }
    calculateBonus() {
        return this.getSalary() * 0.75;
    }
}

const emp2 = new Manager("raju", 35, 5000, "manager");
console.log("Eployee 2:", emp2);
console.log("Eployee 2 sal bonus:", emp2.calculateBonus());

class Engineer extends Employee {
    constructor(name, id, salary, role) {
        super(name, id, salary);
        this.role = role;
    }
    calculateBonus() {
        return this.getSalary() * 0.5;
    }
}

const emp3 = new Engineer("adit", 36, 5000, "engineer");
console.log("Eployee 3:", emp3);
console.log("Eployee 3 sal bonus:", emp3.calculateBonus());

class Intern extends Employee { 
    constructor(name, id, salary, role) {
        super(name, id, salary);
        this.role = role;
    }
    calculateBonus() {
        return this.getSalary() * 0.25;
    }
}

const emp4 = new Intern("abhi", 37, 5000, "intern");
console.log("Eployee 4:", emp4);
console.log("Eployee 4 sal bonus:", emp4.calculateBonus());
