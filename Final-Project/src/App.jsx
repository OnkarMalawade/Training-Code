import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                {/* Add more routes here */}
            </Routes>
        </>
    );
}

export default App;
