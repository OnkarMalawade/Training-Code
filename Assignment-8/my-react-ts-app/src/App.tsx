import './App.css'
import Header from './components/Header'
import User from './components/User'

import { useState } from 'react'



const App = () => {
  const name = 'React';
  const [count, setCount] = useState(0);

const handleClick5 = () => {
  console.log('clicked');
  for (let index = 0; index < 5; index++) {
    setCount(count + 1);
  }
}
  return (
    <>
      <h1>Assignment-8 {name}</h1>
      <Header/>
      <User id="Onkar"/>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      <button onClick={(handleClick5)}>Count + {count}</button>
    </>
  )
}

export default App
