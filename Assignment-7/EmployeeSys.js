var Departments = /** @class */ (function () {
    function Departments() {
        this.employees = [];
    }
    Departments.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Departments.prototype.removeEmployee = function (id) {
        this.employees = this.employees.filter(function (emp) { return emp.id !== id; });
    };
    Departments.prototype.getTotalSalary = function () {
        return this.employees.reduce(function (total, emp) { return total + emp.salary; }, 0);
    };
    Departments.prototype.listEmployees = function () {
        console.log(this.employees);
    };
    return Departments;
}());
var GenericStorage = /** @class */ (function () {
    function GenericStorage() {
        this.storage = [];
    }
    GenericStorage.prototype.add = function (item) {
        this.storage.push(item);
    };
    GenericStorage.prototype.remove = function (item) {
        this.storage = this.storage.filter(function (storedItem) { return storedItem !== item; });
    };
    GenericStorage.prototype.getAll = function () {
        return this.storage;
    };
    return GenericStorage;
}());
function updateSalary(employee, newSalary) {
    employee.salary = newSalary;
    return employee;
}
// Create Department instance
var dept = new Departments();
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
// Use GenericStorage
var storage = new GenericStorage();
storage.add(10);
storage.add(20);
console.log("Storage Items:", storage.getAll());
storage.remove(10);
console.log("After Removing 10:", storage.getAll());
// Update Salary
var updatedEmployee = updateSalary({ id: 2, name: "Bob", position: "Manager", salary: 70000 }, 80000);
console.log("Updated Employee Salary:", updatedEmployee);
