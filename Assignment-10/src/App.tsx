import './App.css'
import Todo from './components/Todo'
import SearchData from './components/SearchData'
import { useState, useEffect } from 'react'

function App() {
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        if (json.length > 0) {
          setHasData(true);
        }
      })
      .catch(() => setHasData(false));
  }, []);

  return (
    <>
      <h1>Assignment-10</h1>
      <SearchData />
      {
        hasData &&
       <Todo />
      }
    </>
  )
}
export default App
