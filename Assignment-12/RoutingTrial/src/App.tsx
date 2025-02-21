import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import User from "./components/User";
import Layout from "./components/Layout";


function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user/:id" element={<User />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
