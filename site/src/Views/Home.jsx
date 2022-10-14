import React from "react";
import { Link } from "react-router-dom";

import Header from "../Components/Header";

export default function Home() {
  return (
    <>
        <Header image="https://images.pexels.com/photos/4969107/pexels-photo-4969107.jpeg">  
        <span>
          <i className="ri-book-2-line"></i>
        </span>
        Booki
        </Header>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="./index.html"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/autores">
              Autores
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/editoras">
              Editoras
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/livros">
              Livros
            </Link>
          </li>
        </ul>
    </>
  );
}
