import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/header/Header";
import TabSection from "./components/TabSection/TabSection";
import Propertydetails from "./pages/Propertydetails";
import { data } from "./data";


function Routing() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/card/:city/:id" element={<Propertydetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
