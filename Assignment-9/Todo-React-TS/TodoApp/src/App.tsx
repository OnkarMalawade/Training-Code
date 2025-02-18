import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const allTodos = JSON.parse(localStorage.getItem('todos') || '[]')

  const [todos, setTodos] = useState<string[]>([...allTodos])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <h1>Todo App : Length {todos.length}</h1>
      <input 
        type="text" 
        id="todos" 
        style={{ padding: "10px", margin: "10px" }}
        placeholder="Enter your todo" 
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      
      <button 
        id="add-todo" 
        onClick={() => {
          setTodos([...todos, newTodo])
          setNewTodo('')
        }} 
        disabled={!newTodo.trim()}
      >
        Add Todo
      </button>

      <ul style={{ listStyleType: 'none' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
            {todo}
            <button 
              id="delete-todo" 
              style={{ margin: "10px" }} 
              onClick={() => setTodos(todos.filter((_, i) => i !== index))}
            >
              Delete
            </button>
            <button 
              id="update-todo" 
              style={{ margin: "10px" }}  
              onClick={() => setTodos(todos.map((t, i) => i === index ? newTodo.toUpperCase() : t))}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App