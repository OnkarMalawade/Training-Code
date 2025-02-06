// const employees = [
//     { name: "Onkar", salary: 5000, role: "Developer" },
//     { name: "Bhushan", salary: 7000, role: "Manager" },
//     { name: "Pravat", salary: 6000, role: "Developer" },
//     { name: "Uzaif", salary: 4000, role: "HR" },
//     { name: "Sumit", salary: 8000, role: "Developer" },
// ];

// const upperCaseNames = employees.map(emp => emp.name.toUpperCase());
// console.log("Uppercase Employee Names:", upperCaseNames);

// const lowerCaseNames = employees.map(emp => emp.name.toLowerCase());
// console.log("Lowercase Employee Names:", lowerCaseNames);

// const developers = employees.filter(emp => emp.role === "Developer");
// console.log("Developers:", developers);

// const managers = employees.filter(emp => emp.role === "Manager");
// console.log("Managers:", managers);

// const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
// console.log("Total Salary of All Employees:", totalSalary);

// const totalRoleSalary = (role) => {
//     return employees
//         .filter(emp => emp.role === role)
//         .map(emp => emp.salary)
//         .reduce((sum, salary) => sum + salary, 0);
// };

// console.log("Total Salary of Developers:", totalRoleSalary("Developer"));
// console.log("Total Salary of Managers:", totalRoleSalary("Manager"));
// console.log("Total Salary of HRs:", totalRoleSalary("HR"));

const products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Phone", price: 30000, category: "Electronics" },
    { name: "Shirt", price: 1500, category: "Clothing" },
    { name: "Headphones", price: 2000, category: "Electronics" },
    { name: "Shoes", price: 2500, category: "Clothing" },
];

const upperCaseNames = products.map(product => product.name.toUpperCase());
console.log("Uppercase Product Names:", upperCaseNames);

const electronicsProducts = products.filter(product => product.category === "Electronics");
console.log("Electronics Products:", electronicsProducts);

const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log("Total Price of All Products:", totalPrice);

const totalCategoryPrice = (category) => {
    return products
        .filter(product => product.category === category)
        .map(product => product.price)
        .reduce((sum, price) => sum + price, 0);
};

console.log("Total Price of Electronics:", totalCategoryPrice("Electronics"));
console.log("Total Price of Clothing:", totalCategoryPrice("Clothing"));
