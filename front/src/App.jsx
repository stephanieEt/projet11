import Footer from "./components/Footer/Footer";
import Header from "/src/components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Accueil from "./components/page/Accueil";
import Sign from "./components/page/Sign";
import UserAccount from "./components/page/User";
import Error from "./components/page/Error";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/User" element={<Sign />} />
        <Route path="/User/Account" element={<UserAccount />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
