import { useReducer, useMemo, useCallback } from "react";
import "./App.css";

const initialState = {
  todos: [],
  todo: "",
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todo: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { text: state.todo, completed: false }],
        todo: "",
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload),
      };
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        todos: state.todos.map((todo, i) =>
          i === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const handleInputChange = useCallback((e) => {
    dispatch({ type: "SET_TODO", payload: e.target.value });
  }, []);

  const addTodo = useCallback(() => {
    if (state.todo.trim() !== "") {
      dispatch({ type: "ADD_TODO" });
    }
  }, [state.todo]);

  const deleteTodo = useCallback((index) => {
    dispatch({ type: "DELETE_TODO", payload: index });
  }, []);

  const toggleCompleted = useCallback((index) => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: index });
  }, []);

  const completedCount = useMemo(() => {
    return state.todos.filter((todo) => todo.completed).length;
  }, [state.todos]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>To-Do App</h2>

      <input
        type="text"
        value={state.todo}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
        style={{ padding: "10px", marginRight: "10px" }}
      />

      <button onClick={addTodo} style={{ padding: "10px" }}>
        Add
      </button>

      <h3>Total Completed Tasks: {completedCount}</h3>

      <table
        style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Index</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>To-Do</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {state.todos.map((todoItem, index) => (
            <tr key={index}>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                {index + 1}
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  textDecoration: todoItem.completed ? "line-through" : "",
                }}
              >
                {todoItem.text}
              </td>
              <td>
                <button onClick={() => deleteTodo(index)}>Delete</button>
                <button onClick={() => toggleCompleted(index)}>
                  {todoItem.completed ? "Undo" : "Complete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
