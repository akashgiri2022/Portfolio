import React from "react";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx"
import  "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>  
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
