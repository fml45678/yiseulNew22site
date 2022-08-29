import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Apage from "./pages/Apage";
import Bpage from "./pages/Bpage";
import Cpage from "./pages/Cpage";
import Dpage from "./pages/Dpage";
import You from "./pages/You";
import Iit from "./pages/Iit";
import SubHeader from "./components/SubHeader";
import Lost from "./pages/Lost";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="page" element={<SubHeader />}>
          <Route path="a" element={<Apage />} />
          <Route path="b" element={<Bpage />} />
          <Route path="c" element={<Cpage />} />
          <Route path="d" element={<Dpage />} />
          <Route path="you" element={<You />} />
          <Route path="iit" element={<Iit />} />
          <Route path="*" element={<Lost />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
