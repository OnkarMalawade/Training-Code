import './App.css'
import Header from './components/Header'
import User from './components/User'

const App = () => {
  const name = 'React';
  return (
    <>
      <h1>Assignment-8 {name}</h1>
      <Header/>
      <User id="Onkar"/>
    </>
  )
}

export default App
