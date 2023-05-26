import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Sobre from "./screens/Sobre";
import NotFound from "./screens/NotFound";
import Menu from "./componentes/Menu/Menu";

export default function App() {
  return (
    <BrowserRouter>
   <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
