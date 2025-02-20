import { createContext, useState } from 'react'
import Child1 from './Child1.tsx';
import './App.css'

const DataContext = createContext("Bhushan");
function App() {
  const [data,] = useState<string>('Onkar');

  return (
    <>
      <DataContext.Provider value={data}>
      <div style={{color:"white", padding:"50px" , border:"1px solid yellow"}}><Child1 /></div>
      </DataContext.Provider>
      <br/>
      <DataContext.Provider value={"Uzaif"}>
      <div style={{color:"pink", padding:"70px" ,border:"1px solid pink"}}><Child1 /></div>
      </DataContext.Provider>
    </>
  )
}

export default App

export {DataContext}