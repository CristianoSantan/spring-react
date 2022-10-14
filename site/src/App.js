import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Views/Home";
import Produtos from "./Views/Produtos";
import Lojas from "./Views/Lojas";
import Contato from "./Views/Contato";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Autores from "./Views/autores";
import AutoresCreate from "./Views/autores/Create.jsx";
import Editoras from "./Views/editoras";
import EditorasCreate from "./Views/editoras/Create.jsx";
import Livros from "./Views/livros";
import LivrosCreate from "./Views/livros/Create.jsx";
import LivrosUpdate from "./Views/livros/Create.jsx";

import "./assets/css/style.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Produtos" element={<Produtos />} />
          <Route path="/Lojas" element={<Lojas />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/autores" element={<Autores />} />
          <Route path="/Autores-create" element={<AutoresCreate />} />
          <Route path="/Autores-Update/:id" element={<AutoresCreate />} />
          <Route path="/Editoras" element={<Editoras />} />
          <Route path="/Editoras-Create" element={<EditorasCreate />} />
          <Route path="/Editoras-Update/:id" element={<EditorasCreate />} />
          <Route path="/Livros" element={<Livros />} />
          <Route path="/Livros-Create" element={<LivrosCreate />} />
          <Route path="/Livros-Update/:id" element={<LivrosUpdate />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
