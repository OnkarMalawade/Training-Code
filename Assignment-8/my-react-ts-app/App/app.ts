type Expense = {
    amount: number;
    category: string;
    date: string;
    description?: string;
};

const expenseForm = document.getElementById("expense-form") as HTMLFormElement;
const expenseList = document.getElementById("expense-list") as HTMLUListElement;
const balanceDisplay = document.getElementById("balance") as HTMLSpanElement;

let expenses: Expense[] = JSON.parse(localStorage.getItem("expenses") || "[]");
let balance: number = parseFloat(localStorage.getItem("balance") || "0");

displayExpenses();
displayBalance();

expenseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const amount = parseFloat((document.getElementById("amount") as HTMLInputElement).value);
    const category = (document.getElementById("category") as HTMLInputElement).value;
    const date = (document.getElementById("date") as HTMLInputElement).value;
    const description = (document.getElementById("description") as HTMLInputElement).value;

    if (!amount || !category || !date || amount > balance) return;

    const expense: Expense = { amount, category, date, description };
    expenses.push(expense);
    balance -= amount;

    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("balance", balance.toString());
    
    displayExpenses();
    displayBalance();
    expenseForm.reset();
});

function displayExpenses() {
    expenseList.innerHTML = "";
    expenses.forEach((expense, index) => {
        const li = document.createElement("li");
        li.textContent = `${expense.date} - ${expense.category}: $${expense.amount} (${expense.description || "No description"})`;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            balance += expense.amount;
            expenses.splice(index, 1);
            
            localStorage.setItem("expenses", JSON.stringify(expenses));
            localStorage.setItem("balance", balance.toString());
            displayExpenses();
            displayBalance();
        });
        
        li.appendChild(deleteBtn);
        expenseList.appendChild(li);
    });
}

function displayBalance() {
    balanceDisplay.textContent = balance.toFixed(2);
}