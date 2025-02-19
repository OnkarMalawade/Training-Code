import { useEffect, useState } from "react";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    } else {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => {
          const limitedTodos = json.slice(0, 5);
          setTodos(limitedTodos);
          localStorage.setItem("todos", JSON.stringify(limitedTodos));
        });
    }
  }, []);

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const newTodoItem: TodoType = {
      userId: 1,
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    };

    const updatedTodos = [...todos, newTodoItem];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setNewTodo("");
  };

  const deleteAllTodos = () => {
    setTodos([]);
    localStorage.removeItem("todos");
  };

  return (
    <>
      <h2>Toudos</h2>

      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
          style={{ padding: "8px", margin: "8px", borderRadius: "5px" }}
        />
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={deleteAllTodos} style={{ marginLeft: "10px" }}>
          Delete All
        </button>
      </div>

      {todos.length > 0 ? (
        <ul style={{ listStyleType: "none" }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                border: "1px solid #000",
                padding: "8px",
                margin: "8px",
                borderRadius: "5px",
              }}
            >
              <strong style={{ color: "blue" }}>ID: {todo.id}</strong>
              <p>{todo.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Not tudo</p>
      )}
    </>
  );
};

export default Todo;
