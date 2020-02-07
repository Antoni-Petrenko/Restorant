import React from "react";
import {MenuItem} from "./MenuItem";
import { Link } from "react-router-dom";

const MenuSection = ({menu}) => {
  return (
    <ul className={"menu"}>
      <MenuItem title={menu} />
      <Link className="menu__button--back" to="/menu">
        Wróć
      </Link>
    </ul>
  );
};

export { MenuSection };
