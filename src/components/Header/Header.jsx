import React from "react";
import image from "./logo-2.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white position-fixed w-100 top-0">
      <div className="container shadow p-4 ">
        <Link className="navbar-brand" to="#">
          <img style={{ width: "100px" }} src={image} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item fw-semibold ">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-danger fw-bolder" : "text-gray"}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item fw-semibold ">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-danger fw-bolder" : "text-gray"}`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item fw-semibold ">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-danger fw-bolder" : "text-gray"}`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item fw-semibold ">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-danger fw-bolder" : "text-gray"}`
                }
                to="/github"
              >
                Github
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="d-flex gap-3 d-sm-none d-none">
          <a href="#" className="btn">
            Log in
          </a>
          <a href="#" className="btn bg-orange text-white fw-bold">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;


