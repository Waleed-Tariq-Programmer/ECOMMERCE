import React from "react";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";
import Delivery from "./Components/Delievry/Delivery";

function App() {
  return (
    
    <>
        <Header />
        <Banner />
        <Outlet />
        <Delivery/>
        <Footer />
    </>
  );
}

export default App;
