import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ name, link, handleClick }) => {
  return (
    <li className="navigation__item">
      <Link className="navigation__link" to={link} onClick={handleClick}>
        {name}
      </Link>
    </li>
  );
};

export { NavItem };
