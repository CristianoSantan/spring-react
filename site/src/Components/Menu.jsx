import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Produtos" className="nav-link">
                  Produtos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Lojas" className="nav-link">
                  Lojas
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contato" className="nav-link">
                  Contato
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
}
