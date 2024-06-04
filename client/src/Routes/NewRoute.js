import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home";
import Footeware from "../views/Footware/Footeware";
import About from "../views/About/About";
import KiddsWare from "../views/KiddsWare/KiddsWare";
import GreainSection from "../views/GreainSection/GreainSection";
import Greenary from "../views/Greenary/Greenary";
import Login from "../views/Login/Login";
import Signup from "../views/Registration/Signup";
import Grocery from "../views/Grocery/Grocery";

function NewRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footeware" element={<Footeware />} />
        <Route path="/about" element={<About />} />
        <Route path="/kiddsware" element={<KiddsWare />} />
        <Route path="/greainsection" element={<GreainSection />} />
        <Route path="/greenary" element={<Greenary />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/grocery" element={<Grocery />} />
      </Routes>
    </div>
  );
}

export default NewRoute;
