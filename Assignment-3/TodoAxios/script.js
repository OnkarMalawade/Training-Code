document.addEventListener("DOMContentLoaded", async () => {
  const inputTodo = document.getElementById("input-todo");
  const buttonTodo = document.getElementById("button-todo");
  const ulTodo = document.getElementById("ul-todo");
  const buttonDeleteAll = document.getElementById("btn-delete-all");

  // AXIOS INSTANCES
  const axiosInstance = axios.create({
    // Other custom settings
    baseURL: 'https://jsonplaceholder.typicode.com'
  });

  // Function to fetch todos using Axios
  const fetchTodos = async () => {
    try {
      const response = await axiosInstance.get("/todos");
      const todos = response.data.map(todo => todo.title); 
      localStorage.setItem("allTodos", JSON.stringify(todos));
      todos.forEach(task => createTodo(task));
      updateDeleteAllVisibility();
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

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

    if (e.target.classList.contains("btn-delete")) {
      const confirmation = confirm("Are you sure you want to delete this todo?");
      if (confirmation) {
        li.remove();
        saveAllTodo();
        updateDeleteAllVisibility();
      }
    }

    if (e.target.classList.contains("btn-edit")) {
      const spanText = li.querySelector(".text-todo");
      const inputField = li.querySelector(".edit-input");
      const editButton = e.target;

      if (editButton.textContent === "Edit") {
        spanText.classList.add("d-none");
        inputField.classList.remove("d-none");
        editButton.textContent = "Save";
      } else {
        spanText.textContent = inputField.value;
        spanText.classList.remove("d-none");
        inputField.classList.add("d-none");
        editButton.textContent = "Edit";
        saveAllTodo();
      }
    }
  });

  buttonDeleteAll.addEventListener("click", () => {
    const confirmation = confirm("Delete all todos?");
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
    if (allTodos.length === 0) {
      fetchTodos();
    } else {
      allTodos.forEach(task => createTodo(task));
      updateDeleteAllVisibility();
    }
  };

  const updateDeleteAllVisibility = () => {
    buttonDeleteAll.style.display = ulTodo.children.length > 0 ? "block" : "none";
  };

  loadAllTodo();
});
