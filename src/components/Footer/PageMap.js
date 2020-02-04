import React from "react";

const PageMap = () => {
  const handleClick = e => {
    e.preventDefault();
    const elem = document.getElementById(e.target.name);
    window.scrollTo({ top: elem.offsetTop, behavior: "smooth" });
  };
  return (
    <ul className="Footer__section">
      <h4 className="Footer__section-heading">Mapa strony:</h4>
      <li className="Footer__section-items">
        <a onClick={handleClick} name="home" href="#home">
          Home
        </a>
      </li>
      <li className="Footer__section-items">
        <a onClick={handleClick} name="menu" href="#menu">
          Menu
        </a>
      </li>
      <li className="Footer__section-items">
        <a onClick={handleClick} name="about-us" href="#about-us">
          O nas
        </a>
      </li>
    </ul>
  );
};

export { PageMap };
