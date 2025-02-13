var expenseForm = document.getElementById("expense-form");
var expenseList = document.getElementById("expense-list");
var balanceDisplay = document.getElementById("balance");
var expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
var balance = parseFloat(localStorage.getItem("balance") || "0");
displayExpenses();
displayBalance();
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var amount = parseFloat(document.getElementById("amount").value);
    var category = document.getElementById("category").value;
    var date = document.getElementById("date").value;
    var description = document.getElementById("description").value;
    if (!amount || !category || !date || amount > balance)
        return;
    var expense = { amount: amount, category: category, date: date, description: description };
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
    expenses.forEach(function (expense, index) {
        var li = document.createElement("li");
        li.textContent = "".concat(expense.date, " - ").concat(expense.category, ": $").concat(expense.amount, " (").concat(expense.description || "No description", ")");
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
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
