document.addEventListener("DOMContentLoaded", () => {
  const inputTodo = document.getElementById("input-todo");
  const buttonTodo = document.getElementById("button-todo");
  const ulTodo = document.getElementById("ul-todo");
  const buttonDeleteAll = document.getElementById("btn-delete-all");

  buttonTodo.addEventListener("click", () => {
    const text = inputTodo.value.trim();
    if (text === "") {
      window.alert("Please enter a todo");
      return;
    }
    createTodo(text);
    inputTodo.value = "";
    saveAllTodo();
    updateDeleteAllVisibility();
  });

  const createTodo = (task) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-start";
    li.innerHTML = `
      <span class="text-todo">${task}</span>
      <input type="text" class="edit-input form-control d-none" value="${task}" />
      <div class="btn-group">
        <button type="button" class="btn btn-primary btn-edit">Edit</button>
        <button type="button" class="btn btn-danger btn-delete">Delete</button>
      </div>`;
    
    ulTodo.appendChild(li);
    updateDeleteAllVisibility();
  };

  ulTodo.addEventListener("click", (e) => {
    const li = e.target.closest(".list-group-item");

    // Delete Confirmation
    if (e.target.classList.contains("btn-delete")) {
      const confirmation = confirm("Are you sure you want to delete this todo?");
      if (confirmation) {
        li.remove();
        saveAllTodo();
        updateDeleteAllVisibility();
      }
    }

    // Inline Editing
    if (e.target.classList.contains("btn-edit")) {
      const spanText = li.querySelector(".text-todo");
      const inputField = li.querySelector(".edit-input");
      const editButton = e.target;

      if (editButton.textContent === "Edit") {
        spanText.classList.add("d-none"); // Hide span
        inputField.classList.remove("d-none"); // Show input
        editButton.textContent = "Save";
      } else {
        spanText.textContent = inputField.value; // Save new text
        spanText.classList.remove("d-none"); // Show span
        inputField.classList.add("d-none"); // Hide input
        editButton.textContent = "Edit";
        saveAllTodo();
      }
    }
  });

  buttonDeleteAll.addEventListener("click", () => {
    const confirmation = confirm("Are you sure you want to delete all todos?");
    if (confirmation) {
      ulTodo.innerHTML = ""; 
      localStorage.removeItem("allTodos"); 
      updateDeleteAllVisibility();
    }
  });

  const saveAllTodo = () => {
    const allTodos = [...document.querySelectorAll(".text-todo")].map(task => task.textContent);
    localStorage.setItem("allTodos", JSON.stringify(allTodos));
  };

  const loadAllTodo = () => {
    const allTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
    allTodos.forEach(task => createTodo(task));
    updateDeleteAllVisibility();
  };

  const updateDeleteAllVisibility = () => {
    buttonDeleteAll.style.display = ulTodo.children.length > 0 ? "block" : "none";
  };

  loadAllTodo();
});
