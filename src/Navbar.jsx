import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("Home");

  const links = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="navbar">
      <h2 className="logo">MySite</h2>
      <ul className="nav-links">
        {links.map((link) => (
          <li
            key={link}
            className={active === link ? "active" : ""}
            onClick={() => setActive(link)}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
