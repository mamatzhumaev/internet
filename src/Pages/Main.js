import React from "react";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Main;
