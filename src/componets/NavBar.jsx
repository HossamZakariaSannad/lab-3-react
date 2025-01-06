import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import Dropdown from "react-bootstrap/Dropdown";
import LanguageContext from "../context/LanguageContext";

export default function NavBar() {
  const counterVal = useSelector((state) => state.counter.value);
  const { lang, setLang } = useContext(LanguageContext);
  console.log(lang);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Movie App
          </a>
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
                <Link className="nav-link link-primary" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active link-danger"
                  aria-current="page"
                  to="/watchlist"
                >
                  Watch List
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active link-success"
                  aria-current="page"
                  to="/watchlist"
                >
                  Watch List Cart: {counterVal}
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link
                  className="btn btn-primary active"
                  tabIndex="-1"
                  role="button"
                  aria-disabled="true"
                  to="/contact"
                >
                  Register
                </Link>
              </li>
              {/* Uncomment if needed in the future
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/counter"
                >
                  Counter Small App
                </Link>
              </li>
              */}
            </ul>
          </div>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-language">
            Language
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setLang("en")}>en</Dropdown.Item>
            <Dropdown.Item onClick={() => setLang("ar")}>ar</Dropdown.Item>
            <Dropdown.Item onClick={() => setLang("fr")}>fr</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </div>
  );
}
