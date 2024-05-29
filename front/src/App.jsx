import Footer from "./components/Footer/Footer";
import Header from "/src/components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes></Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
