"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Employee.prototype.calculateBonus = function () {
        return this.salary;
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, id, salary, role) {
        if (role === void 0) { role = "Manager"; }
        var _this = _super.call(this, name, id, salary) || this;
        _this.role = role;
        return _this;
    }
    Manager.prototype.calculateBonus = function () {
        return 1000 + this.getSalary();
    };
    return Manager;
}(Employee));
var Engineer = /** @class */ (function (_super) {
    __extends(Engineer, _super);
    function Engineer(name, id, salary, role) {
        if (role === void 0) { role = "Engineer"; }
        var _this = _super.call(this, name, id, salary) || this;
        _this.role = role;
        return _this;
    }
    Engineer.prototype.calculateBonus = function () {
        return 500 + this.getSalary();
    };
    return Engineer;
}(Employee));
var Intern = /** @class */ (function (_super) {
    __extends(Intern, _super);
    function Intern(name, id, salary, role) {
        if (role === void 0) { role = "Intern"; }
        var _this = _super.call(this, name, id, salary) || this;
        _this.role = role;
        return _this;
    }
    Intern.prototype.calculateBonus = function () {
        return 250 + this.getSalary();
    };
    return Intern;
}(Employee));
var emp1 = new Manager("onkar", 1, 5000, "Branch Manager");
var emp2 = new Engineer("bhushan", 2, 4000);
var emp3 = new Intern("uzaif", 3, 3000);
console.log(emp1);
console.log(emp1.calculateBonus());
console.log(emp2);
console.log(emp2.calculateBonus());
console.log(emp3);
console.log(emp3.calculateBonus());
