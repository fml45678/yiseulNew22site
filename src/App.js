import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Apage from "./pages/Apage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/a" element={<Apage />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
