import Footer from "./components/Footer/Footer";
import Header from "/src/components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Accueil from "./components/page/Accueil";
import Sign from "./components/page/Sign";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/user" element={<Sign />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
