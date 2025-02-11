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
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, model, rentPricePerDay) {
        if (rentPricePerDay === void 0) { rentPricePerDay = 10; }
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = rentPricePerDay;
    }
    Vehicle.prototype.getRentPricePerDay = function () {
        return this.rentPricePerDay;
    };
    Vehicle.prototype.setRentPricePerDay = function (rentPricePerDay) {
        this.rentPricePerDay = rentPricePerDay;
    };
    Vehicle.prototype.calculateRent = function (data) {
        return this.rentPricePerDay * data;
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, model, rentPricePerDay, name) {
        if (rentPricePerDay === void 0) { rentPricePerDay = 2000; }
        if (name === void 0) { name = "Car"; }
        var _this = _super.call(this, brand, model) || this;
        _this.name = name;
        return _this;
    }
    Car.prototype.calculateRent = function (data) {
        return 500 + this.getRentPricePerDay() * data;
    };
    return Car;
}(Vehicle));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(brand, model, rentPricePerDay, name) {
        if (rentPricePerDay === void 0) { rentPricePerDay = 1000; }
        if (name === void 0) { name = "Bike"; }
        var _this = _super.call(this, brand, model) || this;
        _this.name = name;
        return _this;
    }
    Bike.prototype.calculateRent = function (data) {
        return 250 + this.getRentPricePerDay() * data;
    };
    return Bike;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(brand, model, rentPricePerDay, name) {
        if (rentPricePerDay === void 0) { rentPricePerDay = 5000; }
        if (name === void 0) { name = "Truck"; }
        var _this = _super.call(this, brand, model) || this;
        _this.name = name;
        return _this;
    }
    Truck.prototype.calculateRent = function (data) {
        return 1000 + this.getRentPricePerDay() * data;
    };
    return Truck;
}(Vehicle));
var car1 = new Car("Maruti", "Swift", 2000, "Car");
var bike1 = new Bike("Honda", "Activa", 1000, "Bike");
var truck1 = new Truck("Tata", "Tata", 5000, "Truck");
console.log(car1);
console.log(car1.calculateRent(5));
console.log(bike1);
console.log(bike1.calculateRent(5));
console.log(truck1);
console.log(truck1.calculateRent(5));
