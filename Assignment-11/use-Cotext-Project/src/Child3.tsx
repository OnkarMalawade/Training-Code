import { useContext } from "react";
import { DataContext } from "./App";

const Child3 = () => {
    const userName = useContext(DataContext);
    return (
    <div style={{color:"red", padding:"50px", border:"1px solid white"}}>Hello : {userName}</div>
  )
}

export default Child3