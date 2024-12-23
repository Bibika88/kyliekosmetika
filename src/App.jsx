import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage"; 
import LoginPage from "./components/LoginPage";
import Details from "./components/Details";
import Chek from "./components/Chek";


function App() {
  return (
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/login" element={<LoginPage />} /> 
            <Route path="/details/:id" element={<Details />} /> 
            <Route path="/chek" element={<Chek />} /> 
          </Routes>

  );
}

export default App;