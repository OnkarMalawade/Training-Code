class Vehicle{
    brand : string;
    model : string;
    private rentPricePerDay : number;
    constructor(brand : string, model : string, rentPricePerDay : number = 10){
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = rentPricePerDay;
    }
    getRentPricePerDay() : number{
        return this.rentPricePerDay;
    }
    setRentPricePerDay(rentPricePerDay : number) : void{
        this.rentPricePerDay = rentPricePerDay;
    }
    calculateRent(data : number) : number{
        return this.rentPricePerDay * data;
    }
}

class Car extends Vehicle{
    name : string;
    constructor(brand : string, model : string, rentPricePerDay : number = 2000, name : string = "Car"){
        super(brand, model);
        this.name = name;
    }
    calculateRent(data : number) : number{
        return 500 + this.getRentPricePerDay() * data;
    }
}

class Bike extends Vehicle{
    name : string;
    constructor(brand : string, model : string, rentPricePerDay : number = 1000, name : string = "Bike"){
        super(brand, model);
        this.name = name;
    }
    calculateRent(data : number) : number{
        return 250 + this.getRentPricePerDay() * data;
    }
}

class Truck extends Vehicle{
    name : string;
    constructor(brand : string, model : string, rentPricePerDay : number = 5000, name : string = "Truck"){
        super(brand, model);
        this.name = name;
    }
    calculateRent(data : number) : number{
        return 1000 + this.getRentPricePerDay() * data;
    }
}

let car1 = new Car("Maruti", "Swift", 2000, "Car");
let bike1 = new Bike("Honda", "Activa", 1000, "Bike");
let truck1 = new Truck("Tata", "Tata", 5000, "Truck");

console.log(car1);
console.log(car1.calculateRent(5));

console.log(bike1);
console.log(bike1.calculateRent(5));

console.log(truck1);
console.log(truck1.calculateRent(5));

export {}