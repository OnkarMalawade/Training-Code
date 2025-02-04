class Vehicle {
    constructor(brand, model, rentPricePerDay) {
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = rentPricePerDay;
    }
    calculateRentalCost(days) {
        return this.rentPricePerDay * days;
    }
}

class Car extends Vehicle {
    constructor(brand, model, rentPricePerDay, type) {
        super(brand, model, rentPricePerDay);
        this.type = type;
    }
    calculateRentalCost(days) {
        return super.calculateRentalCost(days) * 1.1; 
    }
}

class Bike extends Vehicle {
    constructor(brand, model, rentPricePerDay, type) {
        super(brand, model, rentPricePerDay);
        this.type = type;
    }
    calculateRentalCost(days) {
        return super.calculateRentalCost(days) * 0.9;
    }
}

class Truck extends Vehicle {
    constructor(brand, model, rentPricePerDay, type) {
        super(brand, model, rentPricePerDay);
        this.type = type;
    }
    calculateRentalCost(days) {
        return super.calculateRentalCost(days) * 1.2;
    }
}

const vehile = new Vehicle("i10", "plus", 100);
console.log(vehile);
console.log("Vehicle Rental Cost for 5 days:", vehile.calculateRentalCost(5));

const car1 = new Car("maruti", "wagonR", 100, "Sedan");
console.log(car1);
console.log("Car Rental Cost for 5 days:", car1.calculateRentalCost(5));

const bike1 = new Bike("Honda", "xl6", 50, "Sport");
console.log(bike1);
console.log("Bike Rental Cost for 5 days:", bike1.calculateRentalCost(5));

const truck1 = new Truck("tata", "pickup", 200, "Pickup");
console.log(truck1);
console.log("Truck Rental Cost for 5 days:", truck1.calculateRentalCost(5));
