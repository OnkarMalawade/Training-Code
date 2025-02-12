interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}
interface Manager extends Employee {
    teamSize: number;
}
class Departments {
    private employees: Employee[] = []
    constructor(){}
    addEmployee(employee: Employee): void {
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

