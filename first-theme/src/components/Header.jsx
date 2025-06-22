import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header>
      <h1>Rajesh Pandey</h1>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
