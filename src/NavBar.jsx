import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { Collapse } from "bootstrap";

export default function NavBar({ url }) {
  const collapseRef = useRef(null);

  useEffect(() => {
    const menuItems = document.querySelectorAll(".nav-link");
    const collapseElement = collapseRef.current;

    const handleMenuItemClick = () => {
      if (collapseElement && collapseElement.classList.contains("show")) {
        new Collapse(collapseElement).toggle();
      }
    };

    menuItems.forEach((item) => {
      item.addEventListener("click", handleMenuItemClick);
    });

    return () => {
      menuItems.forEach((item) => {
        item.removeEventListener("click", handleMenuItemClick);
      });
    };
  }, []);
  const afteKeyDown = (event) => {
    if (event.key === "Enter") {
      event.target.value = "";
      // MAIN SEARCHING WILL BE IN THIS PORTION
    }
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary navbarf sct m10"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid ctt">
        <img src={url} alt="logo" className="logo mx-2" />
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
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          ref={collapseRef}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item mx-2">
                <a className="nav-link" href={item.href}>
                  <h3 className="col_g">{item.label}</h3>
                </a>
              </li>
            ))}
          </ul>
          <form className="d-flex" role="search">
            <input
              id="searchInput"
              className="search-box"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onKeyDown={afteKeyDown}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

const menuItems = [
  { label: "Home", href: "#homepage" },
  { label: "Macs", href: "#scrolltomac" },
  { label: "iPads", href: "#scrolltoipads" },
  { label: "iPhones", href: "#scrolltoiphones" },
  { label: "iTv", href: "#scrolltotvs" },
  { label: "Pods", href: "#scrolltopods" },
  { label: "iWatches", href: "#scrolltowatches" },
  { label: "Airtag", href: "#scrolltotags" },
  { label: "Accesories", href: "#scrolltoaccessories" },
  { label: "Login / Sign Up", href: "./SignUpPage.jsx" },
];
