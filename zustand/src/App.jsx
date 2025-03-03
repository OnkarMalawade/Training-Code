import useStore from "./ProductStore.js";
import "./App.css";

function App() {
    const { count, inc, dec } = useStore();
    return (
        <div>
            <span>{count}</span>
            <br />
            <button onClick={inc}>one up</button>
            <button onClick={dec}>one down</button>
        </div>
    );
}

export default App;
