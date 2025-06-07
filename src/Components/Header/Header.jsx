import React from "react";
import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <header className=" px-3 p-sm-0">
      <nav className="container navbar navbar-expand-lg ">
        <Link
          className="navbar-brand fs-2 text-white text-uppercase fw-bold"
          to="/"
        >
          Start Framework
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto text-white text-uppercase fw-bold d-flex gap-3">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
