interface IEmployee {
    id: number;
    name: string;
    position: string;
    salary: number;
}
interface IManager extends IEmployee {
    teamSize: number;
}
class Departments {
    private employees: IEmployee[] = []
    constructor(){}
    addEmployee(employee: IEmployee): void {
        this.employees.push(employee);
    }
    removeEmployee(id: number) : void {
        this.employees = this.employees.filter((employee) => 
            employee.id !== id
        )
    }
    getTotalSalary(): number {
        return this.employees.reduce((total, emp) => total + emp.salary, 0);
    }
    listEmployees(): void {
        console.log(this.employees);
    }
}
// Create Department instance
const dept = new Departments();

// Add employees
dept.addEmployee({ id: 1, name: "Onkar", position: "Developer", salary: 50000 });
dept.addEmployee({ id: 2, name: "Uzaif", position: "Manager", salary: 70000 });
dept.addEmployee({ id: 3, name: "Bhushan", position: "It Manager", salary: 90000 });

// List employees
console.log("Employees:");
dept.listEmployees();

// Get total salary
console.log("Total Salary:", dept.getTotalSalary());

// Remove an employee
dept.removeEmployee(1);
console.log("After Removal:");
dept.listEmployees();

// storage generics
class GenericStorage<T> {
    private storage: T[] = [];

    addItem(item: T): void {
        this.storage.push(item);
    }

    removeItem(item: T): void {
        this.storage = this.storage.filter(storedItem => storedItem !== item);
    }

    getAll(): T[] {
        return this.storage;
    }
}

function updateSalary<T extends IEmployee>(employee: T, newSalary: number): T {
    return { ...employee, salary: newSalary };
}

const storage = new GenericStorage<number>();
storage.addItem(10);
storage.addItem(20);
console.log("Storage Items:", storage.getAll());
storage.removeItem(10);
console.log("After Removing 10:", storage.getAll());

const updatedEmployee = updateSalary({ id: 2, name: "Bob", position: "Manager", salary: 70000 }, 80000);
console.log("Updated Employee Salary:", updatedEmployee);